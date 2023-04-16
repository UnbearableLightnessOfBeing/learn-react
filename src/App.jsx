import { createRoot } from "react-dom";
import { Card } from "./Card";

const App = () => {
    return (
        <div id="__react_app">
            <h1>My app!</h1>
            <Card title="Card 1" desc="description" text="some text" />
            <Card title="Card 2" desc="description" text="some text" />
            <Card title="Card 3" desc="description" text="some text" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
