import { useBreedList } from "./useBreedList";
import { Breed } from "./Breed";

export const BreedList = () => {
    const [breeds, status] = useBreedList();

    const Render = () => {
        if (status !== "pending") {
            return (
                <div className="space-y-2 mt-4">
                    {breeds?.map((breed) => {
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
