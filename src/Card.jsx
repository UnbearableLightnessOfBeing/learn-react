export const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
            <h3>{props.text}</h3>
        </div>
    );
};
