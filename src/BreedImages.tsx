import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreedImages } from "./fetchBreedImages";


export const BreedImages = (props: any) => {
    const [activeImage, setActiveImage] = useState("");

    const { id } = useParams();

    if (!id) {
        throw new Error('no id here');
    }

    const result = useQuery(["breedImages", id], fetchBreedImages);

    const images = result.data;

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
        if (!activeImage && images?.length) {
            setActiveImage(images[0]?.url ?? "");
        }

        if (images?.length) {
            return (
                <div className="flex h-fit w-full flex-wrap items-start justify-evenly gap-[10px]">
                    {images.map((image) => {
                        const styles =
                            "h-[150px] w-[150px] rounded-full border-2 cursor-pointer overflow-hidden hover:border-sky-400 transition-all duration-200 " +
                            (image.url === activeImage
                                ? "border-green-400"
                                : "");
                        return (
                            <div className={styles} key={image.id}>
                                <img
                                    className={
                                        "h-full w-full object-cover transition duration-200 " +
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
        } else return <div className="text-4xl text-sky-500">No Images</div>;
    }
};
