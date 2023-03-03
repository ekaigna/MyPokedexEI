import React, { useContext } from "react";
import FavoriteContext from "../contexts/favouritesContext";
import { useLocation } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const location = useLocation();
  console.log("location", location.pathname);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemonNames.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3> {pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          {location.pathname !== "/" && (
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
