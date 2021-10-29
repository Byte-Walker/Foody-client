import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './UserAvatar.css';

const UserAvatar = ({ user }) => {
    const { signOutUser } = useFirebase();
    const { displayName, photoURL } = user;
    const [displayProperty, setDisplayProperty] = useState('hidden');

    const handleNavVisibilityChange = () => {
        if (displayProperty === 'hidden') {
            setDisplayProperty('visible');
        } else {
            setDisplayProperty('hidden');
        }
    };

    return (
        <div className="user-avatar">
            <img
                onClick={handleNavVisibilityChange}
                src={photoURL}
                alt={displayName}
                className="user-avatar-img"
            />
            <div
                onClick={handleNavVisibilityChange}
                className={'user-avatar-nav-parent ' + displayProperty}
            >
                <div className={'user-avatar-nav ' + displayProperty}>
                    <img
                        src={photoURL}
                        alt={displayName}
                        className="user-avatar-nav-img"
                    />
                    <h2 className="user-avatar-name">{displayName}</h2>
                    <div className="user-avatar-nav-list">
                        <Link to="/orders">My Orders</Link>
                        <Link to="/allorders">Manage All Orders</Link>
                        <Link to="/orders">Add a New Food</Link>
                    </div>
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
