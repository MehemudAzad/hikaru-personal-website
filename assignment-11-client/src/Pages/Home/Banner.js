import React from 'react';
import picture from '../../Assets/banner/hikaru-nakamura.jpeg';

const Banner = () => {
    return (
       <div className=''>
            <div className='brightness-[.8] h-[500px] bg-cover bg-opacity-60 ' style={{ backgroundImage: `url(${picture})` }}>
            <div className='brightness-[3] text-center py-40 z-10'>
            <h1 className='text-5xl text-white font-semibold font-mono'>GrandMaster.Trainer</h1>
                <p className='text-2xl mt-5 text-rose-700 font-mono font-semibold'>Hikaru Nakamura</p>
            </div>           
            </div>
            <div className='bg-gray-200 h-40 rounded-br-lg rounded-bl-lg'>
                <p className='text-center w-[60%] mx-auto text-gray-600 p-8'>Hikaru Nakamura is a Japanese-American chess grandmaster, Twitch streamer, five-time U.S. Chess Champion, and the reigning World Fischer Random Chess Champion. A chess prodigy, he earned his Grandmaster title at the age of 15, the youngest American at the time to do so</p>
            </div>
       </div>
      
    );
};

export default Banner;