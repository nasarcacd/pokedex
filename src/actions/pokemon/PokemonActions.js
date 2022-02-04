import {
  START_FETCHING_POKEMON_LIST,
  SUCCESS_FETCHING_POKEMON_LIST,
  ERROR_FETCHING_POKEMON_LIST,
  ADD_POKEMON_TO_LIST
} from './PokemonActionsTypes';

export const fetchPokemonStart = () => ({
  type: START_FETCHING_POKEMON_LIST,
});

export const fetchPokemonSuccess = () => ({
  type: SUCCESS_FETCHING_POKEMON_LIST,
});

export const fetchPokemonError = () => ({
  type: ERROR_FETCHING_POKEMON_LIST,
});

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON_TO_LIST,
  payload: pokemon,
});