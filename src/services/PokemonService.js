import axios from 'axios';
import {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonError,
  addPokemon,
} from '../actions/pokemon/PokemonActions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const fetchPokemonsAPI = () => dispatch => {
  dispatch(fetchPokemonStart());
  axios
    .get('/pokemon?limit=151')
    .then(response => {
      response.data.results.forEach(pokemon => {
        axios.get(`/pokemon/${pokemon.name}`).then(detailResponse => {
          pokemonDetails = detailResponse.data;
          dispatch(
            addPokemon({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              types: pokemonDetails.types,
              typesDetails: pokemonDetails.types.reduce((typs, element, index) => {
                return index === 1
                  ? element.type.name.replace("-"," ")
                  : typs + ', ' + element.type.name.replace("-"," ")
              }),
              photo: pokemonDetails.sprites.front_default,
              moves: pokemonDetails.moves.reduce((movs, element, index) => {
                return index === 1
                  ? element.move.name.replace("-"," ")
                  : movs + ', ' + element.move.name.replace("-"," ")
              }),
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
            }),
          );
        });
      });
    })
    .catch(error => dispatch(fetchPokemonError()));
};
