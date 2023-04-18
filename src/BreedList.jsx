import { useBreedList } from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import { Breed } from "./Breed";

export const BreedList = () => {
    const result = useQuery(["breeds"], useBreedList);

    const Render = () => {
        if (!result.isLoading) {
            return (
                <div className="space-y-2 mt-4">
                    {result.data?.map((breed) => {
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
