export const Card = (props) => {
    return (
        <div className="border-4 border-indigo-300 rounded-lg py-2 px-4 w-fit space-y-4">
            <h1 className="text-3xl text-indigo-500 text-center border-b-2 border-indigo-500">
                {props.title}
            </h1>
            <h2 className="text-xl text-indigo-400">{props.desc}</h2>
            <h3 className="opacity-60">{props.text}</h3>
        </div>
    );
};
