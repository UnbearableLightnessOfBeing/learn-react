import { Link } from "react-router-dom";
import type { BreedOnList } from "./APIResponsesTypes";

export const Breed = (props: BreedOnList) => {
    return (
        <div
            key={props.id}
            className="w-[600px] space-y-2 rounded-lg border-2 border-indigo-400 bg-indigo-300 bg-opacity-20 p-4"
        >
            <Link to={`/breeds/${props.id}`} className="block w-fit">
                <h1 className="text-2xl text-blue-400 hover:text-yellow-600 hover:underline hover:underline-offset-4">
                    {props.name}
                </h1>
            </Link>
            <img
                className="h-full w-[500px] object-cover"
                src={props.image?.url}
                alt="image"
            />
            <p className="opacity-60">{props.description}</p>
            <a
                href={props.wikipedia_url}
                target="_blank"
                className="block text-purple-500 underline"
            >
                Read more about this breed on Wikipedia
            </a>
        </div>
    );
};
