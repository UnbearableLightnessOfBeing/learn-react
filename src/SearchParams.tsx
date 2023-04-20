import { useState } from "react";
import { BreedList } from "./BreedList";

type ImageType = "breeds" | "images" | "categories";
const IMAGE_TYPES: ImageType[]  = ['breeds', 'images', 'categories'];

export const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        breedName: "",
        imageType: "breeds",
    } as {
        breedName: string,
        imageType: ImageType
    });

    const RenderContent = ({ imageType }: { imageType: ImageType}) => {
        if (imageType === "breeds") {
            return <BreedList />;
        } else return null;
    };

    return (
        <div className="search-params mx-auto w-fit">
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    setRequestParams({
                        breedName: String(formData.get("breedName")),
                        imageType: String(formData.get("imageType")),
                    } as {
                        breedName: string,
                        imageType: ImageType
                    });
                }}
            >
                <div className="space-y-2">
                    <label htmlFor="name" className="text-2xl">
                        Search by breed
                    </label>
                    <input
                        className="block border-2 border-indigo-400 px-2 py-1"
                        id="name"
                        name="breedName"
                        type="text"
                        placeholder="Breed name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="char" className="text-2xl">
                        Choose type of content
                    </label>
                    <select
                        className="block w-full border-2 border-indigo-400 px-2 py-1"
                        id="char"
                        name="imageType"
                        placeholder="Characteristic"
                    >
                        {IMAGE_TYPES.map((char) => {
                            return <option key={char}>{char}</option>;
                        })}
                    </select>
                </div>
                <button
                    className="block rounded-md bg-indigo-200 px-4 py-2 
                  text-sky-700 transition-colors duration-200 hover:bg-indigo-100"
                >
                    Submit
                </button>
            </form>
            <RenderContent imageType={requestParams.imageType as ImageType} />
        </div>
    );
};
