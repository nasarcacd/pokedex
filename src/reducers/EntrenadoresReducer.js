import {
  ADD_ENTRENADOR_TO_LIST,
} from '../actions/entrenadores/EntrenadoresActionsTypes';

const INITIAL_STATE = {
  entrenadoresList: [],
};

const EntrenadoresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ENTRENADOR_TO_LIST:
      let newEntrenador = action.payload;
      return {
        ...state,
        entrenadoresList: [...state.entrenadoresList, newEntrenador],
      };
    default:
      return state;
  }
};

export default EntrenadoresReducer;
