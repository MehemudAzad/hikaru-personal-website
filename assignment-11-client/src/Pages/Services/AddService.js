import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')
    const handleSubmit =(event)=>{
        event.preventDefault();
        //calling the form with event.target
        const form = event.target;
        //firstname and lastname add kore fullname banano joss
        const name = form.name.value;
        //going inside the form and then calling the name of the input and then .value to get the value
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;
        const price = form.price.value;
        
        //this is very important, but often overlooked. Here we are creating an object named order than passing it using the post api method. This is how we generally create object to store future value.
        const service = {
            name: name,
            title:title,
            img: photoURL,
            description: description,
            price: price,           
        }

        fetch('https://assignment-11-server-topaz.vercel.app/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.acknowledged){
                        alert('Course added successfully');
                    }
                })
                .catch(er => console.error(er));

            //reseting the form after it has been submitted
                form.reset();
                console.log('hit add')
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <form onSubmit={handleSubmit}  className='border-3 shadow-2xl w-[1200px] mt-8  mb-32 p-8'>
            <h1 className='text-4xl font-semibold text-blue-600 mb-5'>Add New Course:</h1>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-blue-500">What is the name of this course?</span>
                </label>
                <input type="text"  name='name' placeholder="name" className="input input-bordered w-full "  required/>
                </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-blue-500">What is the title of this course?</span>
                </label>
                <input type="text" name='title' placeholder="title" className="input input-bordered w-full "  required/>
                </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-blue-500">Give us a photo to display:</span>
                </label>
                <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered w-full"  required/>
                </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-blue-500">What is the price of this course?</span>
                </label>
                <input type="text" name='price' placeholder="price" className="input input-bordered w-full"  required/>
                </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-blue-500">Course Description:</span>
                <span className="label-text-alt"></span>
            </label> 
            <textarea className="textarea textarea-bordered h-24" name='description' placeholder="description" required></textarea>
            </div>
            <button type="submit" class="w-full inline-block px-6 py-2 border-2 mt-5 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                ADD SERVICE
            </button>
            </form>
        </div>
    );
};

export default AddService;