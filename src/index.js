import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import PokemonFavorites from "./pages/PokemonFavorites/PokemonFavorites";
import { FavoriteProvider } from "./contexts/favouritesContext";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {

  //local storage key to retrieve a list of favorite pokemons' names
  const favoritesKey = "f";
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //function used to retrieve a list of favorite pokemons' names from local storage
    const pokemons =
    JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }, []);

  const updateFavoritePokemons = (name) => {
    //function used to update a list of favorite pokemons' names in local storage
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    //delete a pokemon name if it is already in the list
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      //add a pokemon name if it is not in the list
      updatedFavorites.push(name);
    }
    //add final list to local storage
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <BrowserRouter>
    {/* context provider */}
      <FavoriteProvider
        value={{
          favoritePokemonNames: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <Layout/>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route
              exact
              path="/pokemonDetail/:name"
              element={<PokemonDetail />}
            />
            <Route path="/pokemonFavorites" element={<PokemonFavorites />} />
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
