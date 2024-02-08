import React, { useEffect, useState } from 'react';
import Service from './Service';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Courses')
    useEffect(()=>{
    fetch("https://assignment-11-server-topaz.vercel.app/services")
    .then(res => res.json())
    .then(data => setServices(data))
},[])

const reverseServices = services.reverse();
console.log(reverseServices)
// console.log(services);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-4xl font-semibold mt-8'>Our Courses({services.length})</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-12 mb-12 gap-8'>
                {
                    reverseServices.map(service =><Service
                    key = {service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;