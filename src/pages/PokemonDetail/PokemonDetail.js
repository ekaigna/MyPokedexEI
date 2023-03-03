import React from "react";
import { useLocation } from "react-router-dom";
import Pokemon from "../../components/Pokemon";

const PokemonDetail = () => {
    const location = useLocation ()
    const { pokemon } = location.state;
    
  return (
    <>
    <Pokemon pokemon={pokemon} />
    </>
  )
};

export default PokemonDetail;