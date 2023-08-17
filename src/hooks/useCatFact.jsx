import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
    const [fact, setFact] = useState();
    const [factError, setFactError] = useState();

    const getFactAndUpdateReactState = () => {
        getRandomFact()
            .then((newFact) => setFact(newFact))
            .catch((error) => setFactError(error));
    };

    useEffect(() => {
        getFactAndUpdateReactState();
    }, []);
    
    return {
        fact,
        getFactAndUpdateReactState,
    };
};
