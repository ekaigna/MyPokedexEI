import React from "react";

//This context was created in order to be able to update favorite pokemons in all components 
//without using props. Another possibility was to use Redux, however, as it is a small project, 
//a use of Context is more adequate.

const FavoriteContext = React.createContext({
    favoritePokemonNames: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;