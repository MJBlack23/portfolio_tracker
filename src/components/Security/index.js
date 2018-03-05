import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getValues } from '../../selectors/';

import Summary from './Summary/';
import Snapshot from './Snapshot';
import Transaction from './Transaction';


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

        <Snapshot security={security} />

        <div className='container is-fluid'>
          <h3 className='title is-6'>Transactions</h3>
          { security.transactions.map(transaction => {
            console.log(typeof transaction);
            console.log(transaction.transaction);
            return <Transaction transaction={transaction} key={transaction.uuid} />
          })}
        </div>
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