import React from 'react';
import { Link } from 'react-router-dom';
import foodyFeaturedImg from '../../../../media/foody-featured.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div>
                    <p className="banner-tag">
                        <span>More than Faster</span>
                        <i class="fi fi-rr-dashboard"></i>
                    </p>
                    <h1 className="banner-title">
                        <span className="text-color-primary">Fastest </span>
                        Delivery,
                    </h1>
                    <h1 className="banner-title">
                        Delicious{' '}
                        <span className="text-color-primary">Food</span>
                    </h1>
                    <p className="banner-description">
                        We are determined to fill your tummy with the most
                        delicious food through the fastest delivery. So what are
                        you waiting for? Let us fill you.
                    </p>
                    <Link to="/foods" className="btn-primary">
                        <span>Get Started </span> 
                        <i class="fi fi-rr-rocket"></i>
                    </Link>
                </div>
                <img src={foodyFeaturedImg} alt="Foody featured" />
            </div>
        </div>
    );
};

export default Banner;
