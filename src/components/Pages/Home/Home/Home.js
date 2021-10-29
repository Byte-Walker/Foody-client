import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Foods from '../Foods/Foods';
import HowTo from '../HowTo/HowTo';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Foods />
            <HowTo />
        </div>
    );
};

export default Home;
