import React, { useEffect } from 'react';
import Banner from './Banner';
import ServicesHome from './ServicesHome';
import AboutHome from './AboutHome';
import Posts from './Posts';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <AboutHome></AboutHome>
            <Posts></Posts>
        </div>
    );
};

export default Home;