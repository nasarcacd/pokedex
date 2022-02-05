import {
  FECH_POKEMON_TYPES_LIST,
  ADD_POKEMON_TO_LIST
} from './PokemonActionsTypes';

export const fetchPokemonTypes = (types) => ({
  type: FECH_POKEMON_TYPES_LIST,
  payload: types
});

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON_TO_LIST,
  payload: pokemon,
});