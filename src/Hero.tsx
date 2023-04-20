import { Modal } from "./Modal";
import { useState } from "react";

export const Hero = ({ heroUrl }: {heroUrl: string | undefined}) => {
    const [showModal, setShowModal] = useState(false);

    if (!heroUrl) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="relative mx-auto h-fit max-w-[600px] overflow-hidden rounded-lg border-2 border-sky-400">
                <img
                    className="h-full w-full object-contain"
                    alt="hero"
                    src={heroUrl}
                />
                <div
                    className="absolute bottom-3 right-3 cursor-pointer text-sky-600 opacity-50 transition 
                                duration-200 hover:scale-[105%] hover:opacity-100"
                    onClick={(e) => setShowModal(true)}
                >
                    full screen
                </div>
                {showModal ? (
                    <Modal
                        children={
                            <div className="z-100 fixed left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-center bg-black bg-opacity-50 text-white">
                                <div
                                    onClick={(e) => setShowModal(false)}
                                    className="absolute right-2 top-2 cursor-pointer text-4xl text-white opacity-50 hover:opacity-100"
                                >
                                    X
                                </div>
                                <div className="m-[100px] h-full w-full overflow-hidden">
                                    <img
                                        src={heroUrl}
                                        alt="hero"
                                        className="h-full w-full object-contain"
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
