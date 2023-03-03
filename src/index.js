import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import PokemonFavorites from "./pages/PokemonFavorites/PokemonFavorites";
import { FavoriteProvider } from "./contexts/favouritesContext";

export default function App() {

  const favoritesKey = "f";
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons =
    JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
    console.log("favourite",pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <BrowserRouter>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
