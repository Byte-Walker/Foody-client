import { useEffect, useState } from "react";

const useFeatures = () => {
    const [features, setFeatures] = useState();
    useEffect(() => {
        fetch('https://foddy-server.herokuapp.com/features')
        .then(response => response.json())
        .then(data => setFeatures(data));
    },[])

    return features;
}

export default useFeatures;