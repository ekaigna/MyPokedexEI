import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "../../contexts/favouritesContext";
import { Link } from "react-router-dom";
import Pokemon from "../../components/Pokemon";
import { getPokemon } from "../../api";

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
    <div style={{marginTop: 55}} className="pokedex-grid">
      {favoritePokemons && favoritePokemons.length > 0 ? (
        favoritePokemons.map((pokemon, index) => {
          return (
              <Pokemon key={index} pokemon={pokemon} />
          );
        })
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default PokemonFavorites;
