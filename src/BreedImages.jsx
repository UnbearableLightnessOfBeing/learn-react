import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreedImages } from "./fetchBreedImages";

export const BreedImages = () => {
    const { id } = useParams();

    const result = useQuery(["breedImages", id], fetchBreedImages);

    const images = result.data;

    console.log(images);

    if (result.isError) {
        return <div>Oh NOOOOO</div>;
    } else if (result.isLoading) {
        return (
            <div className="text-cetner text-3xl text-sky-400">
                loading images...
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap w-full gap-[20px] justify-around">
                {images.map((image) => {
                    return (
                        <img
                            className="h-[400px] w-fit object-contain"
                            src={image.url}
                            alt={image.id}
                            key={image.id}
                        />
                    );
                })}
            </div>
        );
    }
};
