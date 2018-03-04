import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getValues } from '../../selectors/';

import Summary from './Summary/';
import Snapshot from './Snapshot';
import Transactions from './Transactions';


class Security extends Component {
  render() {
    const { ticker } = this.props.match.params;
    const [security] = this.props.securities.filter(s => s.ticker === ticker);
    if (!security) {
      return null;
    }
    console.log(security);
    return (
      <div style={{ paddingBottom: 50 }}>
        <Summary security={security} />

        <Snapshot />

        <Transactions />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    securities: getValues(state)
  }
}

export default connect(mapStateToProps)(Security);