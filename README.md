# My Pokedex

## Description

This app is designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.

## Functional requirements

1. The user is able to see a main screen with a list of all Pokémons (with
corresponding name, image and type(s) for each of them).
2. In the main page a pagination is applied in the list of Pokémons.
3. From the main page, while clicking a Pokémon, the user is able to navigate to
another page containing the details of that Pokémon.
4. In the Pokémon details page, the user can see the image and
the name of Pokémon, Pokémon's stats , its height, weight, experience, and additionally, a list of abilities and Pokémon's type(s).
5. In the Pokémon detail page, the user can favorite the Pokémon by pressing the heart icon. It can also unselect the Pokémon from the list of favorites by clicking again on heart icon.
6. From the main page, the user is able to navigate to "Favorites" page. This page
contains a list of  the favorite Pokémons (with corresponding name, image and type(s) for each
of them).

## Technical requirements

7. This application was implemented in ReactJS.
8. To get the list of Pókemons and their details, the PokéAPI: https://pokeapi.co/ was used (see
documentation for more details).
9. The local storage was used to handle the list of favorite Pokémons.
10. React Bootstrap was chosen as a primary UI framework .
11. The app is responsive and adapts UI by displaying it in different screen sizes (web and mobile).
12. The code contains comments about different implementations, functions and components used.
13. The application code was submitted in GitHub and can be accessed via the following link: https://github.com/ekaigna/MyPokedexEI 

## Addicional requirements

This app used React Bootstrap Carousel, React Paginate and React Content Loader. Addionally, React Hooks such as useEffect, useState (state management) and useContext were implemented in this app. To navigate between pages, React Router was used. 

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The main technology used for the Pokedex app was React - a JavaScript library for building user interfaces, also using PokéAPI: https://pokeapi.co/.

## Instalation steps

In the project directory, the used can run:

### `npm start`

which runs the app in the development mode.\
The user should open [http://localhost:3000](http://localhost:3000) to view it in browser.


