import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useGetFoodyUser from '../../../hooks/useGetFoodyUser';
import './MyOrders.css';
import OrderedProductCardUser from './OrderedProductCardUser/OrderedProductCardUser';
import BounceLoader from 'react-spinners/BounceLoader';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const id = useGetFoodyUser(useAuth())?._id;
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState('none');

    const updateOrders = (productId) => {
        const updatedOrder = orders.filter(
            (order) => order.productId !== productId
        );
        setOrders(updatedOrder);
    };

    useEffect(() => {
        fetch(`https://foddy-server.herokuapp.com/getuserorders/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
                setDisplay('block');
            });
    }, [id]);

    return (
        <div>
            <div className="page-banner">
                <h1 className="section-title">Your Orders</h1>
            </div>
            <BounceLoader
                color={'#f54747'}
                loading={loading}
                size={75}
                css={{
                    display: 'block',
                    margin: '50px auto',
                }}
                speedMultiplier={2}
            />
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
                    <div className={'my-order-empty ' + display}>
                        <h1 className="section-title">
                            {' '}
                            <span>Alas! Looks like you have no order</span>{' '}
                            <i class="fi fi-rr-sad"></i>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
