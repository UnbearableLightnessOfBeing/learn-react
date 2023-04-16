import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreed } from "./fetchBreed";
import { BreedImages } from "./BreedImages";

export const Details = () => {
    const { id } = useParams();
    const results = useQuery(["breeds", id], fetchBreed);

    const breed = results.data;

    console.log(breed);

    if (results.isError) {
        return <div>Oh NOOOOO</div>;
    }

    if (results.isLoading) {
        return (
            <div className="text-cetner text-3xl text-sky-400">loading...</div>
        );
    } else {
        return (
            <div>
                <h2>Hi! This page&apos;s id is: {id}</h2>
                <div>{breed.name}</div>
                <BreedImages />
            </div>
        );
    }
};
