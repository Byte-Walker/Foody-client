import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../media/hamburger-icon.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img src={hamburgerIcon} alt="Foody hamburger icon" />
                <h1>Foody</h1>
            </Link>

            <nav className="header-navlist">
                <Link to="/home">Home</Link>
                <Link to="/foods">Browse Foods</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="header-right">
                <Link to="/login" className="btn-primary">
                    <i class="fi fi-rr-sign-in-alt"></i> <span>Login</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
