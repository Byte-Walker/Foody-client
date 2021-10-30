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

    if (foodyUser) {
        var {_id, displayName, email } = foodyUser;
    }

    if(product) {
        var {img, name} = product;
    }

    useEffect(() => {
        fetch(`http://localhost:5000/foodinfo/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setTotalPrice(data.price);
            });
    }, []);

    const handlePlaceOrder = () => {

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
        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.insertedId) {
                history.push('/myorders');
            }
        })
    };

    return (
        <div>
            <div className="page-banner">
                <h1 className="section-title">Order Here</h1>
            </div>
            <div className="place-order-section">
                <div className="billing-details">
                    <h2 className="subsection-title">Billing details</h2>
                    <form>
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
                <div>
                    <h2 className="subsection-title">Cart</h2>
                    <div className="cart">
                        <OrderFoodCard product={product} />
                        <div className="horizontal-separator"></div>
                        <div className="flex-between cart-details">
                            <h1 className="text-red">Total</h1>
                            <h1 className="text-red">${totalPrice}</h1>
                        </div>
                    </div>
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
