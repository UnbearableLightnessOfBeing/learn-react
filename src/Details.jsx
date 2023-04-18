import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBreed } from "./fetchBreed";
import { BreedImages } from "./BreedImages";
import { Hero } from "./Hero";
import { Modal } from "./Modal";

export const Details = () => {
    const { id } = useParams();
    const results = useQuery(["breeds", id], fetchBreed);

    const [heroUrl, setHeroUrl] = useState("");
    const [showModal, setShowModal] = useState(false);

    const breed = results.data;

    const handleData = (url) => {
        setHeroUrl(url);
    };

    if (results.isError) {
        return <div>Oh NOOOOO</div>;
    }

    if (results.isLoading) {
        return (
            <div className="text-cetner text-3xl text-sky-400">loading...</div>
        );
    } else {
        return (
            <div className="mx-auto w-fit max-w-[1400px]">
                <h2>Hi! This page&apos;s id is: {id}</h2>
                <div>{breed.name}</div>
                <div className="flex gap-4">
                    <Hero heroUrl={heroUrl} />
                    <BreedImages onData={handleData} />
                </div>
                <div onClick={(e) => setShowModal(true)}>show modal</div>
                {showModal ? (
                    <Modal
                        children={
                            <div className="fixed flex justify-center items-center w-[100vw] h-[100vh] left-0 top-0 text-white bg-black bg-opacity-50 z-100">
                                <div onClick={(e) => setShowModal(false)}>
                                    modal
                                </div>
                            </div>
                        }
                    />
                ) : null}
            </div>
        );
    }
};
