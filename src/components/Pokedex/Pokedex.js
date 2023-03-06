import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import { Link } from "react-router-dom";
import HomeLoading from "../HomeLoading";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import "./Pokedex.css"

const Pokedex = (props) => {
  const { pokemons, loading, setPage, totalPages } = props;

  return (
    <div>
      <div className="pokedex-header">
        <PaginationComponent
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
            <div className="pokedex-grid">
              <HomeLoading />
              <HomeLoading />
              <HomeLoading />
              <HomeLoading />
              <HomeLoading />
              <HomeLoading />
            </div>
        ) : (
          <div className="pokedex-grid">
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
        )}
      </div>
    </div>
  );
};

export default Pokedex;
