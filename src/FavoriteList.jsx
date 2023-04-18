import { useContext } from "react";
import { FavoriteBreedsContext } from "./FavoriteBreedsContext";

export const FavoriteList = () => {
    const [favoriteBreeds] = useContext(FavoriteBreedsContext);

    return (
        <div className="flex gap-4 items-center">
            {favoriteBreeds.map((breed) => {
                return (
                    <img
                        className="w-[100px] h-[100px]"
                        key={breed.id}
                        src={breed.imageSrc}
                        alt=""
                    />
                );
            })}
        </div>
    );
};
