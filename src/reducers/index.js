import { createStore, combineReducers } from 'redux';
import securities from './securities';

const defaultReducer = () => null;

const reducers = combineReducers({
  default: defaultReducer,
  securities,
});

const store = createStore(reducers);


export default store;