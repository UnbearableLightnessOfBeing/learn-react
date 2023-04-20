import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreed } from "./fetchBreed";
import { BreedImages } from "./BreedImages";
import { Hero } from "./Hero";
import { FavoriteBreedsContext } from "./FavoriteBreedsContext";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
    const { id } = useParams();

    console.log(id);

    if (!id) {
        throw new Error("no id");
    }

    const results = useQuery(["breed", id], fetchBreed);

    const [heroUrl, setHeroUrl] = useState("");

    const [
        favoriteBreeds,
        addFavoriteBreed,
        removeFavoriteBreed,
        isBreedFavorite,
    ] = useContext(FavoriteBreedsContext);

    const breed = results.data;

    // if (!breed) {
    //     throw new Error("no breed received");
    // }

    console.log(breed);
    // console.log(favoriteBreeds);

    const handleData = (url: string) => {
        setHeroUrl(url);
    };

    if (results.isError) {
        return <div>Oh NOOOOO</div>;
    }

    if (results.isLoading) {
        return (
            <div className="text-cetner text-3xl text-sky-400">loading...</div>
        );
    } else if (breed) {
        return (
            <div className="mx-auto w-fit max-w-[1400px]">
                <h2>Hi! This page&apos;s id is: {id}</h2>
                <div>
                    <span className="font-bold">Breed name: </span>
                    {breed.name}
                </div>
                <div>
                    <span className="font-bold">Description: </span>
                    {breed.description}
                </div>
                <div>
                    <span className="font-bold">Temperament: </span>
                    {breed.temperament}
                </div>
                <div className="flex gap-4">
                    <Hero heroUrl={heroUrl} />
                    <BreedImages onData={handleData} />
                </div>
                <div
                    className="cursor-pointer text-3xl text-orange-600 opacity-70 hover:opacity-100"
                    onClick={() => {
                        const myBreed = {
                            id: breed.id,
                            imageSrc: heroUrl ?? "",
                        };

                        if (isBreedFavorite(breed.id)) {
                            removeFavoriteBreed(myBreed);
                        } else {
                            addFavoriteBreed(myBreed);
                        }
                    }}
                >
                    {isBreedFavorite(breed.id)
                        ? "unlike this breed"
                        : "like this breed"}
                </div>
            </div>
        );
    }
    else return null;
};

export default function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    );
}
