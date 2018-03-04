import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/';
import Routes from './Routes/';

/** import background actions */
import { fetchLastUpdate } from '../actions/security';

class Main extends Component {
  constructor() {
    super();
    this.state = { timer: null };
  }
  componentDidMount() {
    /** Component is loaded and should get some updated info */
    console.log('Updating information...');
    this.props.fetchLastUpdate('COKE');
    // const timer = setInterval(() => {
    //   console.log('Updating information...');
    // }, (5 * 1000));
    // this.setState({ timer });
  }

  componentWillUnmount() {
    console.log('clearing the timer');
    // clearInterval(this.state.timer);
    // this.setState({ timer: null })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  fetchLastUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
