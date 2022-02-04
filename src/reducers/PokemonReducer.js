import {
  START_FETCHING_POKEMON_LIST,
  SUCCESS_FETCHING_POKEMON_LIST,
  ERROR_FETCHING_POKEMON_LIST,
  ADD_POKEMON_TO_LIST,
} from '../actions/pokemon/PokemonActionsTypes';

const INITIAL_STATE = {
  pokemonList: [],
  isLoading: false,
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_POKEMON_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_FETCHING_POKEMON_LIST:
      return {
        ...state,
        isLoading: false,
      };
    case SUCCESS_FETCHING_POKEMON_LIST:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_POKEMON_TO_LIST:
      let newPokemon = action.payload;
      return {
        ...state,
        pokemonList: [...state.pokemonList, newPokemon],
      };
    default:
      return state;
  }
};

export default PokemonReducer;
