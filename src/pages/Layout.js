import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <>
      <nav>
        <div>
          <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemonFavorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
