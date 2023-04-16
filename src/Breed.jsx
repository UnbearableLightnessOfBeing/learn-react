import { Link } from "react-router-dom";

export const Breed = (props) => {
    return (
        <div
            key={props.id}
            className="w-[600px] bg-indigo-300 bg-opacity-20 border-2 border-indigo-400 p-4 rounded-lg space-y-2"
        >
            <Link to={`/breeds/${props.id}`} className="block w-fit">
                <h1 className="text-2xl text-blue-400 hover:text-yellow-600 hover:underline hover:underline-offset-4">
                    {props.name}
                </h1>
            </Link>
            <img
                className="w-[500px] h-full object-cover"
                src={props.image?.url}
                alt="image"
            />
            <p className="opacity-60">{props.description}</p>
            <a
                href={props.wikipedia_url}
                target="_blank"
                className="block underline text-purple-500"
            >
                Read more about this breed on Wikipedia
            </a>
        </div>
    );
};
