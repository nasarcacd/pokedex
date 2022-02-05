import {
  ADD_EQUIPO_TO_LIST
} from './EquiposActionsTypes';

export const addEquipo = (equipo) => ({
  type: ADD_EQUIPO_TO_LIST,
  payload: equipo,
});