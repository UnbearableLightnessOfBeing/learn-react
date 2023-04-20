import { useBreedList } from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import { Breed } from "./Breed";
import type { BreedOnList } from "./APIResponsesTypes";

export const BreedList = () => {
    const result = useQuery<BreedOnList[]>(["breeds"], useBreedList);

    const breedList = result.data;

    const Render = () => {
        if (!result.isLoading) {
            return (
                <div className="mt-4 space-y-2">
                    {breedList?.map((breed) => {
                        return (
                            <Breed
                                key={breed.id}
                                id={breed.id}
                                name={breed.name}
                                image={breed.image}
                                description={breed.description}
                                wikipedia_url={breed.wikipedia_url}
                            />
                        );
                    })}
                </div>
            );
        } else return <div>Loading...</div>;
    };

    return <Render />;
};
