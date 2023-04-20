import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";
import DetailsErrorBoundary from "./Details";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteBreedsContext } from "./FavoriteBreedsContext";
import { useFavoriteBreeds } from "./useFavoriteBreeds";
import { FavoriteList } from "./FavoriteList";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    const favoriteBreedsHook = useFavoriteBreeds();
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <FavoriteBreedsContext.Provider value={favoriteBreedsHook}>
                    <div className="min-h-[100vh] bg-pink-200 bg-opacity-30">
                        <header className="flex items-center justify-around">
                            <FavoriteList />
                            <Link to="/">
                                <h1 className="mx-auto w-fit py-10 text-4xl text-sky-400">
                                    My app!
                                </h1>
                            </Link>
                        </header>
                        <Routes>
                            <Route
                                path="/breeds/:id"
                                element={<DetailsErrorBoundary />}
                            />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </div>
                </FavoriteBreedsContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");

if (!container) {
    throw new Error('give up, no container to render to');
}

const root = createRoot(container);
root.render(<App />);
