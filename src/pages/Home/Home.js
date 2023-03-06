import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";
import Pokedex from "../../components/Pokedex/Pokedex";
import "./Home.css";

//This page is responsible for fetching pokemons and showing them in Pokedex.

const Home = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  //Items per page showed in pokedex
  const itemsPerPage = 12;

  useEffect(() => {

    //This async function is used to fetch pokemons using PokeAPI.
    const fetchPokemons = async () => {
      try {
        //loading is true while all promises are finished.
        setLoading(true);
        //limit = items per page
        //offset = items per page * number of pages
        const data = await getPokemons(itemsPerPage, itemsPerPage * page);
        //fetching information for each pokemon, using url attribute
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        //finishing all the promises
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        //number of total pages is total number of items divided by items per page
        setTotalPages(Math.ceil(data.count / itemsPerPage));
      } catch (error) {
        setLoading(false);
        console.log("fetchPokemons error: ", error);
      }
    };
    fetchPokemons();
  }, [page]);

  return (
    <div className="container">
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
