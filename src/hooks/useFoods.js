import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState();
    useEffect(() => {
        fetch('https://foddy-server.herokuapp.com/foods')
        .then(response => response.json())
        .then(data => setFoods(data));
    },[])

    return foods;
}

export default useFoods;