import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../reducers/';

import Navbar from './Navbar/';
import Routes from './Routes/';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Navbar />
            <Routes />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
