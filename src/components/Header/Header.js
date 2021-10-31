import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useGetFoodyUser from '../../hooks/useGetFoodyUser';
import hamburgerIcon from '../../media/hamburger-icon.svg';
import UserAvatar from '../UserAvatar/UserAvatar';
import './Header.css';
import logo from '../../media/foody-logo.png';

const Header = () => {
    const user = useAuth();
    console.log(user);

    const foodyUser = useGetFoodyUser(useAuth());
    console.log(foodyUser);

    return (
        <header className="header">
            <Link to="/" className="header-logo">
                {/* <img src={hamburgerIcon} alt="Foody hamburger icon" />
                <h1>Foody</h1> */}
                <img src={logo} alt="Foody Logo" />
            </Link>

            <nav className="header-navlist">
                <Link to="/home">Home</Link>
                <Link to="/foods">Browse Foods</Link>
                <Link to="/myorders">My Orders</Link>
            </nav>

            <div className="header-right">
                {user.email ? (
                    <UserAvatar user={user} />
                ) : (
                    <Link to="/login" className="btn-primary">
                        <i class="fi fi-rr-sign-in-alt"></i> <span>Login</span>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
