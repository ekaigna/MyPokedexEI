import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favouritesContext";
import { useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import typeToColorMapper from "../colors";
import typeToChipColorMapper from "../chipColors";
import "./Pokemon.css";

//This component is used to render pokemon card

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const location = useLocation();

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  //colors used
  const pokemon_color = typeToColorMapper[pokemon.types[0].type.name];
  const chip_pokemon_color = typeToChipColorMapper[pokemon.types[0].type.name];
  const heart_color = favoritePokemonNames.includes(pokemon.name)
    ? "#406264"
    : "#65979a";

  return (
    <div
      className="pokemon-card"
      style={{
        "--pokemon-color": pokemon_color,
        "--chip-color": chip_pokemon_color
      }}
    >
      <div className="pokemon-image-container">
        {pokemon.sprites.front_default && (
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        )}
        {/* using favorite icon only on detail page */}
        {location.pathname !== "/" ? (
          <div className="favorite">
            <button onClick={onHeartClick}>
              <FontAwesomeIcon
                color={heart_color}
                className="heart-icon"
                icon={faHeart}
              />
            </button>
          </div>
        ) : null}
      </div>
      <div className="pokemon-card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {/* chips to show pokemon types */}
            {pokemon.types.map((type, index) => {
              return (
                <div
                  key={index}
                  className="pokemon-chip"
                  style={{
                    backgroundColor: typeToChipColorMapper[type.type.name]
                  }}
                >
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
