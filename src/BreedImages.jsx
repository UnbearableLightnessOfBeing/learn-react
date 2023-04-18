import { useState, useEffect, conmponentDidMount } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreedImages } from "./fetchBreedImages";

export const BreedImages = (props) => {
    const [activeImage, setActiveImage] = useState("");

    const { id } = useParams();

    const result = useQuery(["breedImages", id], fetchBreedImages);

    const images = result.data;

    // const handleClick = (url) => {
    //     setActiveImage(url);
    //     props.onData(url);
    // };

    useEffect(() => {
        props.onData(activeImage);
    }, [activeImage]);

    if (result.isError) {
        return <div>Oh NOOOOO</div>;
    } else if (result.isLoading) {
        return (
            <div className="text-cetner text-3xl text-sky-400">
                loading images...
            </div>
        );
    } else {
        if (!activeImage) {
            setActiveImage(images[0]?.url ?? "");
        }

        return (
            <div className="flex flex-wrap w-full gap-[10px] justify-evenly items-start h-fit">
                {images.map((image) => {
                    const styles =
                        "h-[150px] w-[150px] rounded-full border-2 cursor-pointer overflow-hidden hover:border-sky-400 transition-all duration-200 " +
                        (image.url === activeImage ? "border-green-400" : "");
                    return (
                        <div className={styles} key={image.id}>
                            <img
                                className={
                                    "object-cover w-full h-full transition duration-200 " +
                                    (image.url === activeImage
                                        ? "grayscale"
                                        : "")
                                }
                                onClick={(e) => {
                                    setActiveImage(image.url);
                                }}
                                src={image.url}
                                alt={image.id}
                                key={image.id}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
};
