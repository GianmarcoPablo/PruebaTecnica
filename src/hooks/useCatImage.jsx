import { useState,useEffect } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function useCatImage(fact) {
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        if (!fact) return;
        const ThreefirtsWord = fact?.split(" ", 3).join(" ");
        fetch(
            `${CAT_PREFIX_IMAGE_URL}/cat/says/${ThreefirtsWord}?size=40&color=red&json=true`
        )
            .then((respuesta) => respuesta.json())
            .then((resultado) => {
                const { url } = resultado;
                setImageUrl(url);
            });
    }, [fact]);
    return {
        imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`
    };
}

export default useCatImage;
