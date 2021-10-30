import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useGetFoodyUser from '../../../hooks/useGetFoodyUser';
import './MyOrders.css';
import OrderedProductCardUser from './OrderedProductCardUser/OrderedProductCardUser';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [render, setRender] = useState(true);
    const id = useGetFoodyUser(useAuth())?._id;
    console.log(id);

    const updateOrders = (productId) => {
        const updatedOrder = orders.filter(
            (order) => order.productId !== productId
        );
        setOrders(updatedOrder);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/getuserorders/${id}`)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, [id]);

    return (
        <div>
            <div className="page-banner">
                <h1 className="section-title">Your Orders</h1>
            </div>
            <div>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <OrderedProductCardUser
                            order={order}
                            key={order._id}
                            updateOrders={updateOrders}
                        />
                    ))
                ) : (
                    <div className="my-order-empty">
                        <h1 className="section-title">
                            {' '}
                            <span>
                                Alas! Looks like you have no order
                            </span>{' '}
                            <i class="fi fi-rr-sad"></i>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
