import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import PokemonReducer from './reducers/PokemonReducer';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = compose(applyMiddleware(...middlewares));
  const reducers = combineReducers({
    pokemonStore:  PokemonReducer,
  });
  const store = createStore(reducers, enhancers);
  return store;
};
export default configureStore;