import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import { AuthContext } from '../../context/AuthProvider';

const Comments = ({review, handleDelete}) => {
    const {user} = useContext(AuthContext);

    //delete review
 
    // console.log(review);
    return (
        <div>
            <article className='border-2 shadow-xl my-5 rounded-lg p-4' >
                                <div className="flex items-center mb-4 space-x-4">
                                    <img className="w-10 h-10 rounded-full" src={review?.photoURL ? review.photoURL : "https://w7.pngwing.com/pngs/96/435/png-transparent-world-chess-championship-pawn-chess-piece-chess-engine-cheess-game-king-queen-thumbnail.png"} alt="user phot o"/>
                                    <div className="space-y-1 font-medium dark:text-white">
                                        <p>{review?.customer ? review.customer : "annonymous"} <br /> joined on <time datetime={review?.createdId} className="block text-sm text-gray-500 dark:text-gray-400">{review?.createdId}</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1">
                                <ReactStars 
                                    count={review?.rating}
                                    // onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{review?.title}</h3>
                                </div>
                                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">{review.current_date}</time></p></footer>
                                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review?.message}</p>              
                                <aside>
                                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                        {
                                            user?.email === review.email ?
                                            <>
                                            
                                            <div  class="px-5 py-[3px] relative rounded group font-medium text-white font-medium inline-block">
                                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                            <span class="relative uppercase">edit</span>
                                            </div>
                                            <div onClick={()=>handleDelete(review._id)}  class="px-5 py-[3px] relative rounded group font-medium text-white font-medium inline-block">
                                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                            <span class="relative uppercase">Delete</span>
                                            </div>
                                            </>
                                            :
                                            <>
                                             <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                                            </>
                                           
                                        }
                                     
                                    </div>
                                </aside>
                            </article>
        </div>
    );
};

export default Comments;