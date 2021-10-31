import React from 'react';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = ({ food }) => {
    const { name, description, img, rating, price, _id } = food;
    return (
        <div className="food-card">
            {/* Food thumbnail */}
            <img src={img} alt={name} className="food-img" />

            {/* Food-details */}
            <div className="food-details">
                <div className="food-rating">
                    Rating:
                    {' ' + rating}
                </div>
                <h3 className="food-name">{name}</h3>
                <p className="food-description">
                    {description.slice(0, 70) + ' ...'}
                </p>

                {/* price and order section at the bottom of the card */}
                <div className="food-card-price-order">
                    <p className="food-price">${price}</p>
                    <Link to={`/placeorder/${_id}`} className="btn-primary">
                        Order now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
