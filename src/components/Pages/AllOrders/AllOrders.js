import React, { useEffect, useState } from 'react';
import './AllOrders.css';
import OrderedProductCardAdmin from './OrderedProductCardAdmin/OrderedProductCardAdmin';
import BounceLoader from 'react-spinners/BounceLoader';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [render, setRender] = useState();
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState('none');

    // Update order list after deleting
    const updateOrders = (productId) => {
        const updatedOrder = orders.filter(
            (order) => order.productId !== productId
        );
        setOrders(updatedOrder);
    };

    // Collect all the orders from the server
    useEffect(() => {
        // Send get request to the server
        fetch(`https://foddy-server.herokuapp.com/getallorders`)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
                setDisplay('block');
            });
    }, [render]);

    return (
        <div>
            {/* Page banner */}
            <div className="page-banner">
                <h1 className="section-title">Manage All Orders</h1>
            </div>

            {/* Displaying order list based on the data */}
            <div>
                {/* Loading animation before loading the data from the server */}
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
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <OrderedProductCardAdmin
                            order={order}
                            key={order._id}
                            updateOrders={updateOrders}
                            setRender={setRender}
                        />
                    ))
                ) : (
                    // Displaying empty order message
                    <div className={'my-order-empty ' + display}>
                        <h1 className="section-title">
                            {' '}
                            <span>Alas! There is no order</span>{' '}
                            <i class="fi fi-rr-sad"></i>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllOrders;
