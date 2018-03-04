import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import securities from './securities';
const persistConfig = { key: 'root', storage };

const reducers = combineReducers({
  securities: securities,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = createStore(persistReducers);
export const persistor = persistStore(store);
