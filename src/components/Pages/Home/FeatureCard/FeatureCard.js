import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ feature }) => {
    // Destructuring info from the feature object
    const { title, description, img } = feature;

    return (
        <div className="feature-card">
            <img src={img} alt={title} className="feature-img" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default FeatureCard;
