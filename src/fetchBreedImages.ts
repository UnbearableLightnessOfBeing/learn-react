import { QueryFunction } from "@tanstack/react-query";
import type { Image } from './APIResponsesTypes';

export const fetchBreedImages: QueryFunction<Image[], ['breedImages', string]> = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=20`,
        {
            headers: {
                "X-Api-Key":
                    "live_owRzi9BmeDAY9TeOI5rxUhEo12ZN00rMhT3Jk0cno80FCHDuqgZ2glNjujDqO8VB",
            },
        }
    );

    if (!apiRes.ok) {
        throw new Error(`breeds/${id} fetch is not ok`);
    }

    return apiRes.json();
};
