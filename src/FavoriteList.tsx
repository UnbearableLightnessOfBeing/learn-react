import { useContext } from "react";
import { FavoriteBreedsContext } from "./FavoriteBreedsContext";

export const FavoriteList = () => {
    const [favoriteBreeds] = useContext(FavoriteBreedsContext);

    return (
        <div className="flex items-center gap-4">
            {favoriteBreeds.map((breed) => {
                return (
                    <img
                        className="h-[100px] w-[100px]"
                        key={breed.id}
                        src={breed.imageSrc}
                        alt=""
                    />
                );
            })}
        </div>
    );
};
