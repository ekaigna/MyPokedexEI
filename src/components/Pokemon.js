import React, { useContext } from "react";
import FavoriteContext from "../contexts/favouritesContext";
import { useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const location = useLocation();

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart_color = favoritePokemonNames.includes(pokemon.name) ? "#406264" : "#65979a";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
        {location.pathname !== "/" ? (
          <div className="favorite">
            <button onClick={onHeartClick}>
              <FontAwesomeIcon color={heart_color} className="heart-icon" icon={faHeart} />
            </button>
          </div>
        ) : (
          // <div className="pokemon-id">
          //   <div className="id-text">{pokemon.id}</div>
          // </div>
          null
        )}
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3> {pokemon.name}</h3>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-chip">
                  <div className="pokemon-type-text">{type.type.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
