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
                    {/* <div className="food-rating-star">
                        <i className="fi fi-sr-star"></i>
                        <i className="fi fi-sr-star"></i>
                        <i className="fi fi-sr-star"></i>
                        <i className="fi fi-sr-star"></i>
                        <i className="fi fi-sr-star"></i>
                    </div> */}
                    Rating:
                    {' ' + rating}
                </div>
                <h3 className="food-name">{name}</h3>
                <p className="food-description">{description.slice(0, 70) + ' ...'}</p>

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
