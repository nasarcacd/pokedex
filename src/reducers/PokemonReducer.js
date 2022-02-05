import {
  FECH_POKEMON_TYPES_LIST,
  ADD_POKEMON_TO_LIST,
} from '../actions/pokemon/PokemonActionsTypes';

const INITIAL_STATE = {
  pokemonList: [],
  typesList: [],
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FECH_POKEMON_TYPES_LIST:
      return {
        ...state,
        typesList: action.payload,
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
