export const Hero = ({ heroUrl, imageId }) => {
    if (!heroUrl) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="rounded-lg mx-auto border-2 border-sky-400 overflow-hidden max-w-[600px] h-fit">
                <img className="w-full h-full object-contain" src={heroUrl} />
            </div>
        );
    }
};
