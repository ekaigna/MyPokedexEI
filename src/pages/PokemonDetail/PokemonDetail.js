import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Pokemon from "../../components/Pokemon";
import "./PokemonDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavoriteContext from "../../contexts/favouritesContext";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const PokemonDetail = () => {
  const location = useLocation();
  const { pokemon } = location.state;

  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart_color = favoritePokemonNames.includes(pokemon.name)
    ? "#406264"
    : "#65979a";

  return (
    // <>
    // <Pokemon pokemon={pokemon} />
    // </>
    <div className="detail-container">
      <div className="pokemon-detail-image">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        <div className="favorite-detail">
          <button onClick={onHeartClick}>
            <FontAwesomeIcon
              color={heart_color}
              className="heart-icon-detail"
              icon={faHeart}
            />
          </button>
        </div>
      </div>
      <div className="pokemon-detail-description">
        <h3>{pokemon.name}</h3>
        <div className="progress-container">
            <ProgressBar
              label="Healthy Points"
              visualParts={[
                {
                  percentage: "60%",
                  color: "tan",
                },
              ]}
            />
          <ProgressBar
            label="Healthy Points"
            visualParts={[
              {
                percentage: "60%",
                color: "tan",
              },
            ]}
          />
          <ProgressBar
            label="Healthy Points"
            visualParts={[
              {
                percentage: "60%",
                color: "tan",
              },
            ]}
          />
          <ProgressBar
            label="Healthy Points"
            visualParts={[
              {
                percentage: "60%",
                color: "tan",
              },
            ]}
          />
          <ProgressBar
            label="Healthy Points"
            visualParts={[
              {
                percentage: "60%",
                color: "tan",
              },
            ]}
          />
          <ProgressBar
            label="Healthy Points"
            visualParts={[
              {
                percentage: "60%",
                color: "tan",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
