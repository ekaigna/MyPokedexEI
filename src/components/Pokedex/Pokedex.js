import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import { Link } from "react-router-dom";
import HomeLoading from "../HomeLoading";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import "./Pokedex.css";

//This component shows all the pokemon cards per page. It receives list of pokemons, loading boolean, 
//setPage Hook to be able to change the page state, and number of total pages.

const Pokedex = (props) => {
  const { pokemons, loading, setPage, totalPages } = props;

  return (
    <div>
      <div className="pokedex-header">
        <PaginationComponent totalPages={totalPages} setPage={setPage} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* card content loader */}
        {loading ? (
          <div className="pokedex-grid">
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
            <HomeLoading />
          </div>
        ) : (
          <div>
            <div className="pokedex-grid">
              {/* card mapping */}
              {pokemons &&
                pokemons.map((pokemon, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/pokemonDetail/${pokemon.name}`}
                      state={{ pokemon }}
                    >
                      <Pokemon key={index} pokemon={pokemon} />
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
