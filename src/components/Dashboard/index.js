import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getValues } from '../../selectors/';

import NetValue from './NetValue';
import Card from './Card';
import Button from './Button';

class Dashboard extends Component {

  calculateTotal(securities) {
    if(!securities.length) {
      return '0.00'
    }
    const total = securities.map(s => s.price * s.quantity)
      .reduce((ttl, val) => ttl + val);

    return total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  render() {
    return (
      <div>
        <NetValue netValue={this.calculateTotal(this.props.securities)} />    
        {this.props.securities.map(({ ticker, price, quantity, isUp}) => (
          <Link to={`security/${ticker}`} key={ticker}>
            <Card ticker={ticker} price={price} quantity={quantity} isUp={isUp} />
          </Link>
        )) }
        <Button />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    securities: getValues(state)
  }
}

export default connect(mapStateToProps)(Dashboard);