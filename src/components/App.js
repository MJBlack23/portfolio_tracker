import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../reducers/';

import Main from './Main';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
