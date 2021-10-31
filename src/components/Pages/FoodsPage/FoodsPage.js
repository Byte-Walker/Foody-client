import React from 'react';
import './FoodsPage.css';
import FoodCard from '../Home/FoodCard/FoodCard';
import useFoods from '../../../hooks/useFoods';
import Preloader from '../../Preloader/Preloader';

const FoodsPage = () => {
    // Collecting all the available foods using the custom hook useFoods()
    const foods = useFoods();

    return (
        <div>
            {/* Page banner */}
            <div className="page-banner">
                <h1 className="section-title">
                    Choose the perfect food for you
                </h1>
            </div>

            {/* Displaying all the foods */}
            {foods ? (
                <div className="card-container">
                    {foods?.map((food, index) => (
                        <FoodCard food={food} key={food._id} />
                    ))}
                </div>
            ) : (
                // Showing preloader while the data is loading
                <Preloader />
            )}
        </div>
    );
};

export default FoodsPage;
