import React, { Component } from 'react';

import Summary from './Summary/';
import Snapshot from './Snapshot';
import Transactions from './Transactions';


class Security extends Component {
  render() {
    const rando = [5, 7, 6, 3, 10, 15, 37];
    const { ticker } = this.props.match.params;
    return (
      <div>
        <Summary ticker={ticker} data={rando}/>

        <Snapshot />

        <Transactions />
      </div>
    )
  }
}

export default Security;