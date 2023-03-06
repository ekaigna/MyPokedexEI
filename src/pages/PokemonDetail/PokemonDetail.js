import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./PokemonDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavoriteContext from "../../contexts/favouritesContext";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import typeToColorMapper from "../../components/colors";
import Carousel from "react-bootstrap/Carousel";

const PokemonDetail = () => {
  const location = useLocation();
  const { pokemon } = location.state;

  //to retrive list of favorite pokemons' names)
  const { favoritePokemonNames, updateFavoritePokemons } =
    useContext(FavoriteContext);

  //to update list of pokemons on click
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  //format API stats to be more user friendly
  const changeAPIStat = (stat) => {
    return stat.replace("-", " ");
  };

  //colors used
  const pokemon_color = typeToColorMapper[pokemon.types[0].type.name];
  const heart_color = favoritePokemonNames.includes(pokemon.name)
    ? "#636d81fa"
    : "#636d8154";

  return (
    <div className="detail-container">
      <div className="detail-grid-container">
        <div
          className="pokemon-detail-image"
          style={{
            backgroundColor: pokemon_color,
          }}
        >
          {/* carousel to show all pokemon images */}
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
          {/* heart icon to be able to favorite pokemon */}
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
            {/* progress bar to visualize pokemon's stats */}
            {pokemon && pokemon.stats &&
              pokemon.stats.map((stat, index) => {
                return (
                  <ProgressBar
                    key={index}
                    label={changeAPIStat(stat.stat.name)}
                    visualParts={[
                      {
                        percentage: stat.base_stat,
                        color: pokemon_color
                        ,
                      },
                    ]}
                  />
                );
              })}
          </div>
        </div>
        {/* different pokemon's characteristics  */}
        <div className="stats-container" style={{ marginTop: 0, "--pokemon-color": pokemon_color}}>
          {pokemon.height &&
          <div className="label-container">
            <div className="progressLabel">Height</div>
            <div className="circle">
              <h3>{pokemon.height}</h3>
            </div>
          </div>}
          {pokemon.weight && <div className="label-container">
            <div className="progressLabel">Weight</div>
            <div className="circle">
              <h3>{pokemon.weight}</h3>
            </div>
          </div>}
          {pokemon.base_experience && 
          <div className="label-container">
            <div className="progressLabel">Experience</div>
            <div className="circle">
              <h3>{pokemon.base_experience}</h3>
            </div>
          </div>}
        </div>
        <div className="stats-container" style={{ marginTop: 0 }}>
          {pokemon.abilities && <div className="abilities-container">
            <div className="progressLabel">Abilities</div>
            <div className="pokemon-type">
              {pokemon.abilities.map((ability, index) => {
                return (
                  <div
                    key={index}
                    className="pokemon-chip"
                    style={{ backgroundColor: pokemon_color }}
                  >
                    <div className="pokemon-type-text">
                      {changeAPIStat(ability.ability.name)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>}
          {pokemon.types && <div className="abilities-container">
              <div className="progressLabel">Type</div>
              <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                  return (
                    <div
                      key={index}
                      className="pokemon-chip"
                      style={{ backgroundColor: pokemon_color }}
                    >
                      <div className="pokemon-type-text">{type.type.name}</div>
                    </div>
                  );
                })}
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
