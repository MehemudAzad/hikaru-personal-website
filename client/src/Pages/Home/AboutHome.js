import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../Assets/banner/hikaru-nakamura@2000x1270.jpg'


const AboutHome = () => {
    return (
        <div className='bg-cover py-80 relative' style={{ backgroundImage: `url(${picture})`}} >
            <div className='absolute bg-gradient-to-l from-gray-900 to-transparent top-0 right-0 bottom-0 left-0'></div>
            <div className='pl-[60%] pr-10 text-white z-1 absolute top-[100px]'>
            <h1 className='text-rose-500 text-3xl'>About HIKARU</h1>
            <p><span className='font-3xl font-serif font-bold'>HIKARU NAKAMURA</span>  is an American chess Grandmaster. Nakamura is rated #1 in the United States and has been ranked among the top five players in the world by FIDE.</p>
            <p className='mt-4'>Hikaru Nakamura is an American Chess Grandmaster who was born December 9, 1987 in Hirakata, Osaka Prefecture, Japan to a Japanese father and an American mother. At the age of two, he moved with his mother and older brother to the United States. He began playing at the age of seven and was coached by his Sri Lankan stepfather, FIDE Master and renowned chess author and teacher Sunil Weeramantry.</p>
            <p className='mt-4 mb-8'>Hikaru's January 2011 triumph in winning the prestigious Tata Steel Invitational in Wijk-aan-Zee, the Netherlands, ahead of the four highest ranked players in the world was hailed by none other than the legendary Garry Kasparov as “the best result by an American since 1895.”.</p>
            <Link to='/about' className="mt-40 relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100  shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About Us</span>
            </Link>
            </div>
          


        </div>
    );
};

export default AboutHome;