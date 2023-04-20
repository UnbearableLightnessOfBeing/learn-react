import { createContext } from "react";

type Breed = {
    id: number;
    imageSrc: string;
};

export const FavoriteBreedsContext = createContext<
    [
        Breed[],
        (breed: Breed) => void,
        (breed: Breed) => void,
        (breedId: number) => boolean
    ]
>([
    [],
    () => {},
    () => {},
    () => true,
]);
