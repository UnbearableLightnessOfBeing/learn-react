import { useState } from "react";

export const useFavoriteBreeds = () => {
    let [favoriteBreeds, setFavoriteBreeds] = useState([]);

    const addFavoriteBreed = (breed) => {
        if (!favoriteBreeds.find((item) => item.id === breed.id)) {
            const newArray = favoriteBreeds.map((item) => item);
            newArray.push(breed);
            setFavoriteBreeds(newArray);
        }
    };

    const removeFavoriteBreed = (breed) => {
        if (favoriteBreeds.find((item) => item.id === breed.id)) {
            const newArray = favoriteBreeds.filter(
                (item) => item.id !== breed.id
            );
            setFavoriteBreeds(newArray);
        }
    };

    const isBreedFavorite = (breedId) => {
        return favoriteBreeds.find((item) => item.id === breedId)
            ? true
            : false;
    };

    return [
        favoriteBreeds,
        addFavoriteBreed,
        removeFavoriteBreed,
        isBreedFavorite,
    ];
};
