import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import securities from './securities';
const persistConfig = { key: 'root', storage };

const reducers = combineReducers({
  securities: securities,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
