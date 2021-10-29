import React from 'react';
import useFeatures from '../../../../hooks/useFeatures';
import FeatureCard from '../FeatureCard/FeatureCard';
import './Features.css';

const Features = () => {
    const features = useFeatures();
    console.log(features);
    return (
        <div className="features-section">
            <h1 className="section-title">Why Choose Us</h1>
            <p className="section-description">
                We work really hard to meet your satisfaction. Here is why we
                stand out from the cloud.
            </p>
            <div className="card-container">
                {features?.map((feature) => (
                    <FeatureCard feature={feature} key={feature._id} />
                ))}
            </div>
        </div>
    );
};

export default Features;
