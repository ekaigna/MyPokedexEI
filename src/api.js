
//API functions


//function to get a list of pokemons, using limit and offset
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

//function to get a pokemon data by url
export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}


//function to get a pokemon data by it's name
export const getPokemon = async (name) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}