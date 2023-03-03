import React from "react";
const FavoriteContext = React.createContext({
    favoritePokemonNames: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;