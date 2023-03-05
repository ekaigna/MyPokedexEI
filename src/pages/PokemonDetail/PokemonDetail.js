import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./PokemonDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavoriteContext from "../../contexts/favouritesContext";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import typeToChipColorMapper from "../../components/chipColors";
import typeToColorMapper from "../../components/colors";
import Carousel from "react-bootstrap/Carousel";
import { faVenus } from "@fortawesome/free-solid-svg-icons";

const PokemonDetail = () => {
  const location = useLocation();
  const { pokemon } = location.state;

  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const changeAPIStat = (stat) => {
    return stat.replace("-", " ");
  };

  const heart_color = favoritePokemonNames.includes(pokemon.name)
    ? "#636d81fa"
    : "#636d8154";

  return (
    // <>
    // <Pokemon pokemon={pokemon} />
    // </>
    <div>
      <div className="detail-container">
        <div
          className="pokemon-detail-image"
          style={{
            backgroundColor: typeToColorMapper[pokemon.types[0].type.name],
          }}
        >
          <Carousel id="carousel">
            {pokemon.sprites.front_default && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.front_default}
                  alt="First slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.back_default && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.back_default}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.front_shiny && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.front_shiny}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.back_shiny && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.back_shiny}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.front_female && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.front_female}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.back_female && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.back_female}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.front_shiny_female && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.front_shiny_female}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
            {pokemon.sprites.back_shiny_female && (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pokemon.sprites.back_shiny_female}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}
          </Carousel>
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
        {/* <div
          className="pokemon-detail-image"
          style={{
            backgroundColor: typeToColorMapper[pokemon.types[0].type.name],
          }}
        >
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
          <div className="chip-container">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="pokemon-chip-detail"
                    style={{
                      backgroundColor: typeToChipColorMapper[type.type.name],
                    }}
                  >
                    <div className="detail-type-text">{type.type.name}</div>
                  </div>
                );
              })}
            </div>
          </div>*/}

        <div className="pokemon-detail-description">
          <h3>{pokemon.name}</h3>
          <div className="progress-container">
            {pokemon &&
              pokemon.stats.map((stat, index) => {
                return (
                  <ProgressBar
                    key={index}
                    label={changeAPIStat(stat.stat.name)}
                    visualParts={[
                      {
                        percentage: stat.base_stat,
                        color: "tan",
                      },
                    ]}
                  />
                );
              })}
          </div>
        </div>
          <div className="stats-container" style={{ marginTop: 0 }}>
            <div className="label-container">
              <div className="progressLabel">Height</div>
              <div className="circle">
                <h3>{pokemon.height}</h3>
              </div>
            </div>
            <div className="label-container">
              <div className="progressLabel">Weight</div>
              <div className="circle">
                <h3>{pokemon.weight}</h3>
              </div>
            </div>
            <div className="abilities-container">
              <div className="progressLabel">Abilities</div>
              <div className="pokemon-type">
                {pokemon.abilities.map((ability, index) => {
                  return (
                    <div key={index} className="pokemon-chip" style={{backgroundColor: "#31241c6f"}}>
                      <div className="pokemon-type-text">{ability.ability.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        <div className="weakness-container">
          <div>Type</div>
          <div>Weaknesses</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
