import React from 'react';
import useFeatures from '../../../../hooks/useFeatures';
import Preloader from '../../../Preloader/Preloader';
import FeatureCard from '../FeatureCard/FeatureCard';
import './Features.css';

const Features = () => {
    // Getting all the features using the custom hook useFeatures()
    const features = useFeatures();

    return (
        // Features section of the home page
        <div className="features-section" id="why-us">
            <h1 className="section-title">Why Choose Us</h1>

            <p className="section-description">
                We work really hard to meet your satisfaction. Here is why we
                stand out from the cloud.
            </p>

            {/* Displaying the features based on the data */}
            {features ? (
                <div className="card-container">
                    {features?.map((feature) => (
                        <FeatureCard feature={feature} key={feature._id} />
                    ))}
                </div>
            ) : (
                // Showing preloader while loading the data
                <Preloader />
            )}
        </div>
    );
};

export default Features;
