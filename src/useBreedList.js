export const useBreedList = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
            "X-Api-Key":
                "live_owRzi9BmeDAY9TeOI5rxUhEo12ZN00rMhT3Jk0cno80FCHDuqgZ2glNjujDqO8VB",
        },
    });

    if (!response.ok) {
        throw new Error(`couldn't fetch breeds`);
    }

    return response.json();
};
