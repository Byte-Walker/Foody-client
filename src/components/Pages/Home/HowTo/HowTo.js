import React from 'react';
import './HowTo.css';
import howToImg from '../../../../media/HowTo.svg';

const HowTo = () => {
    return (
        <div className="how-to-section" id="how-to-order">
            <img src={howToImg} alt="step by step guide" />
            <div className="how-to-guide">
                <h1 className="section-title">How It Works</h1>
                <div className="how-to-step">
                    <h2 className="how-to-step-heading">
                        {' '}
                        <span className="text-color-primary">01</span> Choose
                        your food
                    </h2>
                    <p className="how-to-step-description">
                        First of all, choose the best food that you like the
                        most from the foods section. Click on the "Order now"
                        button.
                    </p>
                </div>
                <div className="how-to-step">
                    <h2 className="how-to-step-heading">
                        {' '}
                        <span className="text-color-primary">02</span> Pay For
                        the order
                    </h2>
                    <p className="how-to-step-description">
                        Then, pay the required fee in the easiest way. You can
                        make your payment in various platforms.
                    </p>
                </div>
                <div className="how-to-step">
                    <h2 className="how-to-step-heading">
                        {' '}
                        <span className="text-color-primary">03</span> Get your
                        order delivered
                    </h2>
                    <p className="how-to-step-description">
                        Just relax for half an hour and you will discover the
                        delivery is right at your door. We promise our service
                        will amaze you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowTo;
