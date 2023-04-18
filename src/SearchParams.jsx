import { useState } from "react";
import { BreedList } from "./BreedList";

const IMAGE_TYPES = ["breeds", "images", "categories"];

export const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        breedName: "",
        imageType: "breeds",
    });

    const RenderContent = ({ imageType }) => {
        if (imageType === "breeds") {
            return <BreedList />;
        } else return null;
    };

    return (
        <div className="search-params w-fit mx-auto">
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    setRequestParams({
                        breedName: formData.get("breedName"),
                        imageType: formData.get("imageType"),
                    });
                }}
            >
                <div className="space-y-2">
                    <label htmlFor="name" className="text-2xl">
                        Search by breed
                    </label>
                    <input
                        className="block border-2 border-indigo-400 py-1 px-2"
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
                        className="block border-2 w-full border-indigo-400 py-1 px-2"
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
                    className="bg-indigo-200 py-2 px-4 rounded-md text-sky-700 
                  hover:bg-indigo-100 transition-colors duration-200 block"
                >
                    Submit
                </button>
            </form>
            <RenderContent imageType={requestParams.imageType} />
        </div>
    );
};
