import React from 'react';
import './FoodsPage.css';
import FoodCard from '../Home/FoodCard/FoodCard';
import useFoods from '../../../hooks/useFoods';
import Preloader from '../../Preloader/Preloader';

const FoodsPage = () => {
    const foods = useFoods();

    return (
        <div>
            <div className="page-banner">
                <h1 className="section-title">
                    Choose the perfect food for you
                </h1>
            </div>

            {foods ? (
                <div className="card-container">
                    {foods?.map((food, index) => (
                        <FoodCard food={food} key={food._id} />
                    ))}
                </div>
            ) : (
                <Preloader />
            )}
        </div>
    );
};

export default FoodsPage;
