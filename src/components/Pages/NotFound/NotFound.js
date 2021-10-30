import React from 'react';
import './NotFound.css';
import NotFoundImg from '../../../media/notFound.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={NotFoundImg} alt="Not Found" />
            <h1>OOPS! Looks like we couldn't find anything for you!</h1>
            <div>
                <Link to="/">Go back to home page</Link>
            </div>
        </div>
    );
};

export default NotFound;
