import React from 'react';
import './Login.css';
import googleIcon from '../../../media/google-icon.svg';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn, setUser, setError } = useFirebase();

    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
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
