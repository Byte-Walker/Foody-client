import React from 'react';
import './Login.css';
import googleIcon from '../../../media/google-icon.svg';
import useFirebase from '../../../hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { googleSignIn, setUser, setError, user } = useFirebase();

    // Redirecting to the destination page
    const history = useHistory();
    const location = useLocation();

    const destination = location.state?.from?.pathname || '/';

    if(user.email) {
        history.push(destination);
    }

    // Update foody server if the user is new
    const updateFoodyServer = (result) => {
        fetch('https://foddy-server.herokuapp.com/getuser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result.user),
        })
            .then((response) => response.json())
            .then((data) => {
                //
            });
    };

    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                updateFoodyServer(result);
                setUser(result.user);
                history.push(destination);
            })
            .catch((err) => {
                setError(err);
            });
    };

    return (
        <div className="login">
            <h1 className="section-title">Login Here</h1>
            <button onClick={handleGoogleSignIn} className="login-btn">
                <img src={googleIcon} alt="Google icon" className="img-icon" />
                <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default Login;
