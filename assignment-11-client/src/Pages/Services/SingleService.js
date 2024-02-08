import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Reviews from '../Reviews';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Comments from './Comments';
import useTitle from '../../hooks/useTitle';

const SingleService = () => {
    useTitle('CourseDetail')
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
      };
    const [rating, setRating] = useState();
    const service = useLoaderData();
    // console.log(service)
    const {_id, name , title, description, price, img, course_id} = service;
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
   
    //getting all the reviews for the service
    useEffect(() => {
        fetch(`https://assignment-11-server-topaz.vercel.app/reviews/?id=${_id}`,{
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews,_id, reviews])

    // console.log([reviews]);

    const handleDelete = id =>{
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if(proceed){
            fetch(`https://assignment-11-server-topaz.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
               })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //here we get an object an inside of it there is a property named deletedCount whose value becomes 1 once when you click it
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }
    
    //handling comment or review input
    const handleComment =(event)=>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const title = form.title.value;
        const time = new Date().getTime();
        const date = new Date();
        const current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        const review = {
            service: _id,
            serviceName: name,
            customer: user.displayName,
            email : user.email,
            photoURL: user.photoURL,
            createdId: user.metadata.creationTime,
            title,
            message,
            rating:rating,
            time,
            current_date
        }
        console.log(review);
        //get post 
        fetch('https://assignment-11-server-topaz.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.acknowledged){
                        alert('comment placed successfully');
                        // const remaining = reviews.filter(rev => rev._id !== id);
                        // const approving = reviews.find(rev => rev._id === id);
        
                        // const newOrders = [approving, ...remaining];
                        // setReviews(newOrders);
                    }
                })
                .catch(er => console.error(er)); 

        form.reset();
      
    }

    

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-2 items-center gap-10'>
            <div>
                <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-gray-400">{name}</span> </h1>

                <p className='my-4'>{description}</p>
            </div>
            <div>
                <img className='w-full shadow-2xl' src={img} alt="" />
            </div>
            </div>
           
            <div className='mt-10'>
                <h1 className='text-4xl font-semibold mb-4'>Reiviews({reviews.length}):</h1>
                {
                    reviews.length === 0 ?
                    <>
                     <p className='text-4xl mt-10 mb-32 text-blue-500'>No comments to display</p>
                    </>
                    :
                    <div>
                       
                       {
                        reviews?.map(review =><Comments
                        review={review}
                        key={review._id}
                        handleDelete={handleDelete}
                        >
                        
                        </Comments>)
                       }
                         </div>
}
                    <h2 className='text-4xl font-semibold mt-16 '>Leave a reply:</h2>
                       <div className='mb-36 mt-8'>
                       <form onSubmit={handleComment} >
                    <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div className='pl-2'>
                        <ReactStars 
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" className="sr-only">Your comment</label>
                            <textarea name='title' id="title" rows="1" className="p-2 w-full text-sm text-gray-900 bg-white border-1 shadow-md dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a title..." required></textarea>
                            <textarea name='message' id="comment" rows="5" className="shadow-md p-2 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                        </div>
                        <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                            {
                                user?.uid ? 
                                <> 
                                <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                POST COMMENT
                            </button>
                                </>
                                :
                                <>
                                <Link to="/login">
                                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                       Create Account to post comments
                                    </button>
                                </Link>   
                                </>
                            }
                           
                            <div className="flex pl-0 space-x-1 sm:pl-2">
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Attach file</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Set location</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                    <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
    
    
                       </div>
                   
              
                
            
                </div>
               
        </div>
    );
};

export default SingleService;