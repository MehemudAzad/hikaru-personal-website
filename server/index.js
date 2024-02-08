const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//mongodb uri and client
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k5k5bzp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// //verifying jwt token 
function verifyJWT(req, res, next){
    // next()
    const authHeader = req.headers.authorization;
    if(!authHeader){
        // res.send({message: 'unauthorized access'})
        res.status(401).send({message: 'unauthorized access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err ,decoded){
        if(err){
            res.status(401).send({message: 'forbidden access'})
        }
        req.decoded = decoded;
        next();
    })
}

// console.log(uri)
async function run(){
    try{
        const serviceCollection = client.db('trainer-hikaru').collection('services');
        const reviewCollection = client.db('trainer-hikaru').collection('reviews');

        app.post('/jwt', (req, res) =>{
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5h'})
            res.send({token})

            //sending the token as an objext the property is token and the value is also token
            // res.send({token});
        })

         //get methods
         app.get('/services', async (req, res) => {
            //finding all the data using {} empty object
            const query = {} 
            //getting the query request from server collection
            const cursor = serviceCollection.find(query); 
            const services = await cursor.toArray();
            //getting services 
            res.send(services);
        });


        app.get('/services/:id', async (req, res) => {
            // const id = req.params.id;
            // console.log(req);
            const query = { _id: ObjectId(req.params.id) };
            //findOne is used when we want only one data
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });

     
        //reviews by email
        app.get('/myreviews',verifyJWT, async (req, res) => {
            const decoded = req.decoded;
            console.log('inside orders api', decoded);

            if(decoded.email !== req.query.email){ 
                res.status(403).send({message: 'unauthorized access'})
            }

            let query = {}; 

            if (req.query.email) {
                query = {
                    email: req.query.email
                }
            }
            const cursor = reviewCollection.find(query);
            const reviews = await cursor.toArray();
            res.send(reviews); 
        });

        //reviews by id
        app.get('/reviews', async (req, res) => {
            // const id = req.params.id;
            // console.log(req);
            const time = req.query.time;
            let query = {};
            if(req.query.id){
                query = {
                    service: req.query.id
                }
            }
            console.log(time);
            // const query = { _id: ObjectId(req.params.id) };
            //findOne is used when we want only one data
            const cursor = reviewCollection.find(query).sort({time: -1});
            // const orders = await cursor.toArray();
            const reviews = await cursor.toArray();
            res.send(reviews);
        });

        //post methods
        app.post('/reviews', async (req, res) => {
            const review = req.body;
            const result = await reviewCollection.insertOne(review);
            res.send(result);
        });

        app.post('/services', async (req, res) => {
            const course = req.body;
            const result = await serviceCollection.insertOne(course);
            res.send(result);
        });

           //patch methods
           app.patch('/myreviews/:id', async (req, res) => {
            const id = req.params.id;
            //sending a field name status to the body
            const message = req.body.message
            const query = { _id: ObjectId(id) }
            //setting the status key value with status value from body
            const updatedDoc = {
                $set:{
                    message : message
                }
            }
            const result = await reviewCollection.updateOne(query, updatedDoc);
            res.send(result);
        })

         //delete methods
         app.delete('/myreviews/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await reviewCollection.deleteOne(query);
            res.send(result);
        })


    }finally{

    }
    
}

//running the function
run().catch(err => console.error(err));

//testing the server if it's working 
app.get('/', (req, res) => {
    res.send("hikaru's server is running");
})
//listening to the port
app.listen(port, () => {
    console.log(`hikaru's server running on ${port}`);
})
