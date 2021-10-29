import React from 'react';
import { Link } from 'react-router-dom';
import useFoods from '../../../../hooks/useFoods';
import FoodCard from '../FoodCard/FoodCard';
import './Foods.css';

const Foods = () => {
    const foods = useFoods();

    return (
        <div className="foods-section">
            <h1 className="section-title">Delicious Food For you</h1>
            <p className="section-description">
                These delicious foods are only 20 minutes away from you. So what
                are you waiting for?
            </p>
            <div className="card-container">
                {foods?.map((food) => (
                    <FoodCard food={food} key={food._id} />
                ))}
            </div>
            <div>
                <Link to="/foods" className="btn-primary">
                    <span>See more</span>
                    <i class="fi fi-rr-angle-double-small-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default Foods;

/*
https://i.ibb.co/b5MKQKJ/burger-1.jpg
https://i.ibb.co/SB3zmfr/burger-2.jpg
https://i.ibb.co/fNjBnX5/fried-rice.jpg
https://i.ibb.co/St7RYS3/pizza-1.jpg
https://i.ibb.co/YLBk7BQ/pizza-2.jpg
https://i.ibb.co/G3B9sfW/sandwitch.jpg
*/
