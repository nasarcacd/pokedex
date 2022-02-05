import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import PokemonReducer from './reducers/PokemonReducer';
import EntrenadoresReducer from './reducers/EntrenadoresReducer';
import EquiposReducer from './reducers/EquiposReducer';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = compose(applyMiddleware(...middlewares));
  const reducers = combineReducers({
    pokemonStore: PokemonReducer,
    entrenadoresStore: EntrenadoresReducer,
    equiposStore: EquiposReducer,
  });
  const store = createStore(reducers, enhancers);
  return store;
};
export default configureStore;
