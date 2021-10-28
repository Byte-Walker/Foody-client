import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../media/hamburger-icon.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header-logo">
                <img src={hamburgerIcon} alt="Foody hamburger icon" />
                <h1>Foody</h1>
            </Link>

            <div className="header-navlist">
                <Link to="/home">Home</Link>
                <Link to="/foods">Browse Foods</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="header-right">
                <Link to="/login" className="btn-primary">
                    <i class="fi fi-rr-sign-in-alt"></i> <span>Login</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
