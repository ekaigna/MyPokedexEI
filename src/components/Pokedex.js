import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    console.log("volta");
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="pokedex-header">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <Link style={{ textDecoration: 'none' }} to={`/pokemonDetail/${pokemon.name}`} state={{ pokemon }}>
                  <Pokemon key={index} pokemon={pokemon} />
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
