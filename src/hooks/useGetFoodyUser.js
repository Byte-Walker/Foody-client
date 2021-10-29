import { useEffect, useState } from 'react';

const useGetFoodyUser = (firebaseUser) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetch('https://foddy-server.herokuapp.com/getuser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(firebaseUser),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    }, [firebaseUser]);

    return user;
};

export default useGetFoodyUser;
