import initFirebase from '../Firebase/Firebase.init';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    // Initializing the firebase app
    initFirebase();
    const auth = getAuth();

    // Google signin
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Keep the signed in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    // SignOut user
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return { googleSignIn, user, setUser, error, setError, signOutUser };
};

export default useFirebase;
