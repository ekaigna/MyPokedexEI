import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./PokemonDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavoriteContext from "../../contexts/favouritesContext";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import typeToChipColorMapper from "../../components/chipColors";
import typeToColorMapper from "../../components/colors";

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

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

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
          </div>
        </div>
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
      </div>
      {/* <OwlCarousel
        id="customer-testimonoals"
        className="owl-carousel owl-theme"
        {...options}
      >
        {pokemon.sprites.length !== 0 && (
          <>
            <div className="item">
              <div className="shadow-effect">
                <img src={pokemon.sprites.back_default} />
                <p>blabla</p>
              </div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img src={pokemon.sprites.back_default} />
                <p>blabla</p>
              </div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img src={pokemon.sprites.back_default} />
                <p>blabla</p>
              </div>
            </div>
          </>
        )}
      </OwlCarousel> */}
    </div>
  );
};

export default PokemonDetail;
