import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "../../contexts/favouritesContext";
import Pokemon from "../../components/Pokemon/Pokemon";
import { getPokemon } from "../../api";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PokemonFavorites.css";
import HomeLoading from "../../components/HomeLoading";

const PokemonFavorites = () => {
  const { favoritePokemonNames } = useContext(FavoriteContext);
  const [loading, setLoading] = useState(true);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    //async function used to retrieve all favorite pokemons from local storage
    const fetchFavoritePokemons = async () => {
      try {
        const promises = favoritePokemonNames.map(async (name) => {
          return await getPokemon(name);
        });

        const results = await Promise.all(promises);
        setFavoritePokemons(results);
        setLoading(false);
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
    };
    fetchFavoritePokemons();
  }, [favoritePokemonNames]);

  return (
    <div className="favorite-container">
      {loading && (
        <div className="pokedex-grid">
          <HomeLoading />
          <HomeLoading />
          <HomeLoading />
          <HomeLoading />
          <HomeLoading />
          <HomeLoading />
        </div>
      )}
      {favoritePokemons && favoritePokemons.length > 0 && (
        <div className="pokedex-grid">
          {favoritePokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>
      )}
      {/* in case there are no favorite pokemons */}
      {!loading && favoritePokemons.length === 0 && (
        <div className="not-found-container">
          <div className="not-found">There are no favorite pokemons here</div>
          <FontAwesomeIcon className="sad-icon" icon={faFaceFrown} />
        </div>
      )}
    </div>
  );
};

export default PokemonFavorites;
