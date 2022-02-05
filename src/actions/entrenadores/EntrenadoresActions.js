import {
  ADD_ENTRENADOR_TO_LIST
} from './EntrenadoresActionsTypes';

export const addEntrenador = (entrenador) => ({
  type: ADD_ENTRENADOR_TO_LIST,
  payload: entrenador,
});