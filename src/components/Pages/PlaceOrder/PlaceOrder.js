import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useGetFoodyUser from '../../../hooks/useGetFoodyUser';
import OrderFoodCard from './OrderFoodCard/OrderFoodCard';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const history = useHistory();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const foodyUser = useGetFoodyUser(useAuth());

    // Checking if foody user is loaded for avoiding error
    if (foodyUser) {
        var { _id, displayName, email } = foodyUser;
    }

    // Checking if product is loaded for avoiding error
    if (product) {
        var { img, name, description, price, rating } = product;
    }

    // Collect the product info from the server
    useEffect(() => {
        // Send get request to the server
        fetch(`https://foddy-server.herokuapp.com/foodinfo/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setTotalPrice(data.price);
            });
    }, []);

    // Add order to the server
    const handlePlaceOrder = () => {
        // Building the order object with the given data
        const orderDetails = {
            dbUser_id: _id,
            productId,
            name,
            country,
            address,
            time: new Date().toTimeString(),
            date: new Date().toDateString(),
            status: 'pending',
            price: totalPrice,
            img,
        };

        // Sending post request to the server including the product object to the body
        fetch('https://foddy-server.herokuapp.com/placeorder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                // Redirecting user to the orders page after successfull order
                if (data.insertedId) {
                    history.push('/myorders');
                }
            });
    };

    return (
        <div>
            {/* Page banner */}
            <div className="page-banner">
                <h1 className="section-title">Order Here</h1>
            </div>

            <div className="place-order-section">
                {/* Displaying product details */}
                <div className="place-order-product-details">
                    {/* Heading */}
                    <h2 className="subsection-title">Product Details</h2>

                    {/* Product info */}
                    <div>
                        <div className="place-order-product-info">
                            <h3 className="place-order-product-property">
                                Name:{' '}
                            </h3>
                            <span className="place-order-product-value">
                                {name}
                            </span>
                        </div>

                        <div className="place-order-product-info">
                            <h3 className="place-order-product-property">
                                Description:{' '}
                            </h3>
                            <span className="place-order-product-value">
                                {description}
                            </span>
                        </div>

                        <div className="place-order-product-info">
                            <h3 className="place-order-product-property">
                                Rating:{' '}
                            </h3>
                            <span className="place-order-product-value">
                                {rating}/5
                            </span>
                        </div>

                        <div className="place-order-product-info">
                            <h3 className="place-order-product-property">
                                Price:{' '}
                            </h3>
                            <span className="place-order-product-value">
                                ${price}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Getting details from the user */}
                <div className="billing-details">
                    <h2 className="subsection-title">Billing details</h2>

                    {/* Details form */}
                    <form>
                        {/* Input group consisting of label and input field */}
                        <p className="input-group">
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={displayName}
                                disabled
                            />
                        </p>

                        {/* Email */}
                        <p className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                disabled
                            />
                        </p>

                        {/* Country */}
                        <p className="input-group">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Your Country"
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                }}
                            />
                        </p>

                        {/* Full Address */}
                        <p className="input-group">
                            <label htmlFor="full-address">Full Address</label>
                            <textarea
                                name="full-address"
                                id="full-address"
                                cols="30"
                                rows="3"
                                placeholder="Your full address here..."
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            ></textarea>
                        </p>
                    </form>
                </div>

                {/* Cart section */}
                <div>
                    <h2 className="subsection-title">Cart</h2>

                    {/* Order details */}
                    <div className="cart">
                        <OrderFoodCard product={product} />
                        <div className="horizontal-separator"></div>
                        <div className="flex-between cart-details">
                            <h1 className="text-red">Total</h1>
                            <h1 className="text-red">${totalPrice}</h1>
                        </div>
                    </div>

                    {/* Submit button */}
                    <button
                        onClick={handlePlaceOrder}
                        className="place-order-btn"
                    >
                        <i class="fi fi-rr-shopping-bag"></i>
                        <span> Place Order</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
