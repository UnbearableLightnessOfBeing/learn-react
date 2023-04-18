import { useState } from "react";
import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";
import { Details } from "./Details";
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
                    <div className="bg-pink-200 bg-opacity-30 min-h-[100vh]">
                        <header className="flex justify-around items-center">
                            <FavoriteList />
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
                </FavoriteBreedsContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
