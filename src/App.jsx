import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";
import { Details } from "./Details";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <div className="bg-pink-200 bg-opacity-30 min-h-[100vh]">
                    <header>
                        <Link to="/">
                            <h1 className="text-4xl w-fit mx-auto text-sky-400 py-10">
                                My app!
                            </h1>
                        </Link>
                    </header>
                    <Routes>
                        <Route path="/breeds/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </div>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
