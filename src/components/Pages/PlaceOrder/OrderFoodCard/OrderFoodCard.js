import React from 'react';
import './OrderFoodCard.css';

const OrderFoodCard = ({ product }) => {
    const { name, price, img} = product;

    return (
        <div className="order-food-card flex-between">
            {/* Food card information */}
            <div className="order-food-card-info">
                <img src={img} alt={name} />
                <h2>{name}</h2>
            </div>
            <h3 className="order-food-card-price">${price}</h3>
        </div>
    );
};

export default OrderFoodCard;
