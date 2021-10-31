import React, { useEffect, useState } from 'react';
import './AllOrders.css';
import OrderedProductCardAdmin from './OrderedProductCardAdmin/OrderedProductCardAdmin';
import BounceLoader from 'react-spinners/BounceLoader';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [render, setRender] = useState();
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState('none');

    const updateOrders = (productId) => {
        const updatedOrder = orders.filter(
            (order) => order.productId !== productId
        );
        setOrders(updatedOrder);
    };

    useEffect(() => {
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
            <div className="page-banner">
                <h1 className="section-title">Manage All Orders</h1>
            </div>
            <div>
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
