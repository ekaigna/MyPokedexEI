import React, { useContext } from "react";
import FavoriteContext from "../contexts/favouritesContext";

const Navbar = () => {
  const { favoritePokemonNames } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritePokemonNames.length} ❤️</div>
    </nav>
  );
};

export default Navbar;