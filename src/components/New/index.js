import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateField, addTransaction } from '../../actions/transactions';
import { TextInput, MoneyInput, BlockButton, LinkButton } from '../shared/';

class NewTransaction extends Component {

  handleFieldChange(e) {
    this.props.updateField(e.target.name, e.target.value);
  }

  handleAddTransaction(e) {
    const { group, ticker, quantity, purchasePrice, addTransaction } = this.props;
    addTransaction({ group, ticker, quantity, purchasePrice });
  }

  render() {
    const { group, ticker, quantity, purchasePrice } = this.props;

    return (
      <div>
        <section className='section'>

          <div className='columns'>
            <div className='column'>
              <p className='title has-text-centered'>Add Transaction</p>
            </div>
          </div>

          <TextInput
            name='group'
            display='Group'
            value={group}
            onChange={this.handleFieldChange.bind(this)}
          />
          <TextInput
            name='ticker'
            display='Ticker'
            value={ticker}
            onChange={this.handleFieldChange.bind(this)}
          />
          <MoneyInput
            name='purchasePrice'
            display='Purchase Price'
            value={purchasePrice}
            onChange={this.handleFieldChange.bind(this)}
          />
          <TextInput
            name='quantity'
            display='Purchase Quantity'
            value={quantity}
            onChange={this.handleFieldChange.bind(this)}
          />
          <BlockButton text='Add Transaction' onClick={this.handleAddTransaction.bind(this)} />
          <LinkButton text='Cancel' onClick={() => {}} />

        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ securities }) => {
  const { group, ticker, quantity, purchasePrice } = securities.transaction;
  return {
    group,
    ticker,
    quantity,
    purchasePrice,
  };
}

const mapDispatchToProps = {
  updateField,
  addTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
