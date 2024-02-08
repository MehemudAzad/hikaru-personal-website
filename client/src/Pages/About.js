import React from 'react';
import useTitle from '../hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            this is about page
        </div>
    );
};

export default About;