import React from 'react';
import './OrderedProductCardUser.css';

const OrderedProductCardUser = ({ order, updateOrders }) => {
    const { productId, status, price, img, name } = order;

    // Delete user from the database
    const handleDeleteOrder = () => {
        // Send delete request to the server
        fetch(`https://foddy-server.herokuapp.com/deleteorder/${productId}`, {
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
            {/* Product info */}
            <img src={img} alt="" className="ordered-product-img" />
            <h2 className="ordered-product-name">{name}</h2>
            <h2 className="ordered-product-price">${price}</h2>
            <p className={('ordered-product-status ', status)}>
                {status?.toUpperCase()}
            </p>

            {/* Delete button */}
            <button
                onClick={() =>
                    // Confirmation popup
                    window.confirm('Are you sure you want to delete this?')
                        ? handleDeleteOrder()
                        : null
                }
                className="ordered-product-cancel-btn"
            >
                {' '}
                <span className="cancel-btn-text">Cancel Order</span>
                <i
                    class="fi fi-rr-trash cancel-btn-icon"
                    title="Cancel Order"
                ></i>
            </button>
        </div>
    );
};

export default OrderedProductCardUser;
