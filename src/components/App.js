import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../reducers/';

import Navbar from './Navbar/';
import Routes from './Routes/';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <div>
            <Navbar />
            <Routes />
          </div>
          {/* </PersistGate> */}
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
