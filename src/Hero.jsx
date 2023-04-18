import { Modal } from "./Modal";
import { useState } from "react";

export const Hero = ({ heroUrl, imageId }) => {
    const [showModal, setShowModal] = useState(false);

    if (!heroUrl) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="relative rounded-lg mx-auto border-2 border-sky-400 overflow-hidden max-w-[600px] h-fit">
                <img className="w-full h-full object-contain" src={heroUrl} />
                <div
                    className="text-sky-600 opacity-50 transition duration-200 absolute bottom-3 right-3 
                                hover:opacity-100 hover:scale-[105%] cursor-pointer"
                    onClick={(e) => setShowModal(true)}
                >
                    full screen
                </div>
                {showModal ? (
                    <Modal
                        children={
                            <div className="fixed flex justify-center items-center w-[100vw] h-[100vh] left-0 top-0 text-white bg-black bg-opacity-50 z-100">
                                <div
                                    onClick={(e) => setShowModal(false)}
                                    className="absolute top-2 right-2 text-4xl text-white opacity-50 hover:opacity-100 cursor-pointer"
                                >
                                    X
                                </div>
                                <div className="w-full h-full m-[100px] overflow-hidden">
                                    <img
                                        src={heroUrl}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        }
                    />
                ) : null}
            </div>
        );
    }
};
