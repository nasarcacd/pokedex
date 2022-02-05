import {
  ADD_EQUIPO_TO_LIST,
} from '../actions/equipos/EquiposActionsTypes';

const INITIAL_STATE = {
  equiposList: [],
};

const EquiposReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EQUIPO_TO_LIST:
      let newEquipo = action.payload;
      return {
        ...state,
        equiposList: [...state.equiposList, newEquipo],
      };
    default:
      return state;
  }
};

export default EquiposReducer;
