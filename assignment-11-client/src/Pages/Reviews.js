import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import MyReviews from './MyReviews';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const {updatedMsg, setUpdatedMsg} = useContext(AuthContext);

   
//delete review
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


    const handleUpdate = (id) => {    
        console.log(updatedMsg);
        fetch(`https://assignment-11-server-topaz.vercel.app/myreviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('hikaru-token')}`
            },
            body: JSON.stringify({message: updatedMsg})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // here we have something called modified count in an object called data
            if(data.modifiedCount) {
                const remaining = reviews.filter(rev => rev._id !== id);
                const approving = reviews.find(rev => rev._id === id);

                const newOrders = [approving, ...remaining];
                setReviews(newOrders);
            }
        })
    }

    useEffect(() => {
        fetch(`https://assignment-11-server-topaz.vercel.app/myreviews/?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('hikaru-token')}`
            }
        })
            .then(res=>{
                if(res.status === 401 || res.status === 403){
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])

    // console.log(reviews);
    return (
        <div className='max-w-screen-xl mx-auto'>
            {
                reviews.length !==0 ?
                <>
                <h1 className='text-4xl'>Your reviews on this website: {reviews.length}</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full mb-20 mt-8">
   
    <thead w-fulla>
      <tr className='grid grid-cols-12 w-full'>
        <th>
    
        </th>
        <th className='col-span-2'>Course</th>
        <th className='col-span-2'>Title</th>
        <th className='col-span-5'>Message</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody className='w-full'>
     {
        reviews.map(review=><MyReviews 
            review={review} 
            key={review._id}
            // handleMessage={handleMessage}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            ></MyReviews>)
     }
    </tbody>
  </table>
</div>
                </>
                :
                <>
                <h1 className='text-4xl my-80 text-center text-blue-500'>No comments were added</h1>
                </>
            }
            

        </div>
    );
};

export default Reviews;