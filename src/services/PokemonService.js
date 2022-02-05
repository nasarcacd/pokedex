import axios from 'axios';
import {addPokemon} from '../actions/pokemon/PokemonActions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const fetchPokemonsAPI = () => dispatch => {
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
              typesDetails: pokemonDetails.types
                .map(element => {
                  return element.type.name;
                })
                .toString(),
              photo: pokemonDetails.sprites.front_default,
              moves: pokemonDetails.moves
                .map(element => {
                  return element.move.name.replace('-', ' ');
                })
                .toString(),
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
            }),
          );
        });
      });
    })
    .catch(error => console.log('error adding pokemon', error));
};
