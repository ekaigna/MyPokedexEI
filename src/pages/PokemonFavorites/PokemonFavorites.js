import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "../../contexts/favouritesContext";
import { Link } from "react-router-dom";
import Pokemon from "../../components/Pokemon";
import { getPokemon } from "../../api";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonFavorites = () => {
  const { favoritePokemonNames } = useContext(FavoriteContext);
  const [loading, setLoading] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const fetchFavoritePokemons = async () => {
    try {
      console.log("favouriteNames", favoritePokemonNames);
      setLoading(true);
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

  useEffect(() => {
    fetchFavoritePokemons();
  }, [favoritePokemonNames]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
      {favoritePokemons && favoritePokemons.length > 0 ? (
        <div className="pokedex-grid">
          {favoritePokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />
          })}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="not-found">There are no favorite pokemons here</div>
          <FontAwesomeIcon className="sad-icon" icon={faFaceFrown} />
        </div>
      )}
    </div>
  );
};

export default PokemonFavorites;
