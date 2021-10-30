import React from 'react';
import './OrderedProductCardUser.css';

const OrderedProductCardUser = ({ order, updateOrders }) => {
    const { productId, status, price, img, name } = order;

    const handleDeleteOrder = () => {
        fetch(`http://localhost:5000/deleteorder/${productId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    updateOrders(productId);
                } else {
                    console.error('Something went wrong deleting the product');
                }
            });
    };

    return (
        <div className="order-product-card">
            <img src={img} alt="" className="ordered-product-img" />
            <h2 className="ordered-product-name">{name}</h2>
            <h2 className="ordered-product-price">${price}</h2>
            <p className={('ordered-product-status ', status)}>
                {status.toUpperCase()}
            </p>
            <button
                onClick={handleDeleteOrder}
                className="ordered-product-cancel-btn"
            >
                {' '}
                <span>Cancel Order</span>
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
    );
};

export default OrderedProductCardUser;
