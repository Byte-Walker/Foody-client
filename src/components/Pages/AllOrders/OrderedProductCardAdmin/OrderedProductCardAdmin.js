import React from 'react';
import './OrderedProductCardAdmin.css';

const OrderedProductCardAdmin = ({ order, updateOrders, setRender }) => {
    const { productId, status, price, img, name } = order;

    // Delete the product from the server
    const handleDeleteOrder = () => {
        // Delete request having product id in the url
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

    // Update order status to the server
    const handleOrderStatusChange = () => {
        // Send update / PUT request to the server
        fetch(
            `https://foddy-server.herokuapp.com/updateorderstatus/${productId}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'completed',
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                // Show success message
                if (data.modifiedCount > 0) {
                    console.log('Order status updated successfully');
                    const date = new Date().toTimeString();
                    setRender(date);
                }
            });
    };

    return (
        <div className="order-product-card">
            {/* Product information */}
            <img src={img} alt="" className="ordered-product-img" />
            <h2 className="ordered-product-name">{name}</h2>
            <h2 className="ordered-product-price">${price}</h2>
            <p className={('ordered-product-status ', status)}>
                {status.toUpperCase()}
            </p>

            {/* action buttons */}
            <div className="ordered-product-btn-group">
                {/* Order delete button */}
                <button
                    onClick={() =>
                        window.confirm('Are you sure you want to delete this?')
                            ? handleDeleteOrder()
                            : null
                    }
                    className="ordered-product-cancel-btn"
                >
                    {' '}
                    <span className="cancel-btn-text">Delete Order</span>
                    <i class="fi fi-rr-trash cancel-btn-icon"></i>
                </button>

                {/* Order status update button */}
                {status === 'pending' ? (
                    <button
                        onClick={handleOrderStatusChange}
                        className="ordered-product-complete-btn"
                    >
                        {' '}
                        <span className="cancel-btn-text">
                            Mark as Completed
                        </span>
                        <i class="fi fi-rr-shopping-cart-check cancel-btn-icon"></i>
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default OrderedProductCardAdmin;
