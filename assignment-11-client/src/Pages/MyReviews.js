import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';

const MyReviews = ({review, handleDelete, handleUpdate}) => {
    useTitle('MyReviews')
    const {message, rating, serviceName, title, _id} = review;
    const {updatedMsg, setUpdatedMsg} = useContext(AuthContext);

    const handleMessage = (e) =>{
      // console.log();
      // const edited = e.edit.value;
      setUpdatedMsg(e.target.value)
     }
    

    return (  
      // table starts 
      
         <tr className='grid grid-cols-12'>
        <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
        </th>
        <td className='col-span-2'>{serviceName}</td>
        <td className='col-span-2'>{title?.slice(0,25)}</td>
        <td className='col-span-5'>{message?.slice(0,40)}</td>
        <td >{rating}</td>
        <th>
          <button className="btn btn-ghost btn-xs"><label htmlFor={`my-modal-${_id}`}>edit</label></button>
        </th>
        

  {/*-----------=--=-----==--=-==--=-=-=-=-=-=-=
            modal start 
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/}
        <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <form onSubmit={()=>handleUpdate(_id)}  className="modal-box relative">
          <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-semibold mb-2">Edit the comment</h3>
          <textarea onBlur={handleMessage} name='edit' className="textarea textarea-secondary w-full mb-5" placeholder={message}></textarea>
          <button type='submit' className="px-2 py-1 btn-secondary absolute right-6 bottom-2 rounded">Done</button>
        </form>
      </div> 
      </tr> 
     
      
    );
};

export default MyReviews;



// {/* The button to open modal */}
// <label htmlFor="my-modal-3" className="btn">open modal</label>

// {/* Put this part before </body> tag */}
// <input type="checkbox" id="my-modal-3" className="modal-toggle" />
// <div className="modal">
//   <div className="modal-box relative">
//     <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
//     <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//   </div>
// </div>