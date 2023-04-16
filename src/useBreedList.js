import { useState, useEffect } from "react";

const localCache = {};

export const useBreedList = () => {
    const [breeds, setBreeds] = useState([]);
    const [status, setStatus] = useState("pending");

    useEffect(() => {
        if (!localCache["breeds"]) {
            requestBreeds();
        } else {
            setBreeds(localCache["breeds"]);
            setStatus("fetched");
        }
    }, []);

    async function requestBreeds() {
        setStatus("pending");
        const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
            headers: {
                "X-Api-Key":
                    "live_owRzi9BmeDAY9TeOI5rxUhEo12ZN00rMhT3Jk0cno80FCHDuqgZ2glNjujDqO8VB",
            },
        });

        const breeds = await response.json();
        console.log(breeds);
        setBreeds(breeds);
        localCache["breeds"] = breeds;
        setStatus("fetched");
    }

    return [breeds, status];
};
