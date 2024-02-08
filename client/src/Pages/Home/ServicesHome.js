import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Services/Service';

const ServicesHome = () => {
    const [services, setServices] = useState([]);

        useEffect(()=>{
        fetch("https://assignment-11-server-topaz.vercel.app/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // console.log(services);
    const displayedServices = services.slice(services.length-3,services.length );
    // console.log(displayedServices);
    return (
        <div className='mt-36 mb-32 max-w-screen-xl mx-auto'>
            <h1 className='text-5xl text-center '>Learn from the best</h1>
            <p className='text-2xl text-gray-500 mt-5 mx-auto w-[80%]'>We teach from begginer to mastery, from opening principles to mastaring endgame, dominating the middle game. Stop struggling and join our academy to get started with you journey. We have hundreds of courses to fit your apetite and help you grow as a chess player</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-12 mb-12'>
                {
                    displayedServices.reverse().map(service =><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <Link to='/services' className='mt-12'>
            <button className="btn btn-outline btn-secondary mx-auto w-[95%] block">SEE ALL</button>
            </Link>
        </div>
    );
};

export default ServicesHome;