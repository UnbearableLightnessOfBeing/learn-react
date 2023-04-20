import { useState } from "react";
import type { Breed } from "./APIResponsesTypes";

export const useFavoriteBreeds = (): [Breed[], (breed: Breed) => void, (breed: Breed) => void, (breddId: number) => boolean] => {
    let [favoriteBreeds, setFavoriteBreeds] = useState<Breed[]>([]);

    const addFavoriteBreed = (breed: Breed) => {
        if (!favoriteBreeds.find((item) => item.id === breed.id)) {
            const newArray = favoriteBreeds.map((item) => item);
            newArray.push(breed);
            setFavoriteBreeds(newArray);
        }
    };

    const removeFavoriteBreed = (breed: Breed) => {
        if (favoriteBreeds.find((item) => item.id === breed.id)) {
            const newArray = favoriteBreeds.filter(
                (item) => item.id !== breed.id
            );
            setFavoriteBreeds(newArray);
        }
    };

    const isBreedFavorite = (breedId: number) => {
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
