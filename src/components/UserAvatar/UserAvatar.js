import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './UserAvatar.css';

const UserAvatar = ({ user }) => {
    const { signOutUser } = useFirebase();
    const { displayName, photoURL } = user;
    const [displayProperty, setDisplayProperty] = useState('hidden');

    // Handle popup menu while clcking on the user
    const handleNavVisibilityChange = () => {
        if (displayProperty === 'hidden') {
            setDisplayProperty('visible');
        } else {
            setDisplayProperty('hidden');
        }
    };

    return (
        <div className="user-avatar">
            {/* User avatar */}
            <img
                onClick={handleNavVisibilityChange}
                src={photoURL}
                alt={displayName}
                className="user-avatar-img"
            />

            {/* Popup menu */}
            <div
                onClick={handleNavVisibilityChange}
                className={'user-avatar-nav-parent ' + displayProperty}
            >
                <div className={'user-avatar-nav ' + displayProperty}>
                    {/* Avatar */}
                    <img
                        src={photoURL}
                        alt={displayName}
                        className="user-avatar-nav-img"
                    />

                    {/* Name */}
                    <h2 className="user-avatar-name">{displayName}</h2>

                    {/* Navigation */}
                    <div className="user-avatar-nav-list">
                        <Link to="/myorders">My Orders</Link>
                        <Link to="/allorders">Manage All Orders</Link>
                        <Link to="/newfood">Add a New Food</Link>
                    </div>

                    {/* Signout button */}
                    <button onClick={signOutUser} className="btn-primary">
                        <span>SignOut </span>
                        <i class="fi fi-rr-sign-out"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserAvatar;
