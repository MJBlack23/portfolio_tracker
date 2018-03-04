import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateField, addTransaction } from '../../actions/transactions';
import { TextInput, MoneyInput, BlockButton, LinkButton } from '../shared/';

class NewTransaction extends Component {

  componentWillUnmount() {
    this.props.updateField('success', false);
  }

  handleFieldChange(e) {
    this.props.updateField(e.target.name, e.target.value);
  }

  shouldRedirect() {
    if (this.props.success) {
      return <Redirect to='/' />
    }

    return null;
  }

  handleAddTransaction(e) {
    e.preventDefault();
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

          <form>
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
            <BlockButton
              text='Add Transaction'
              type='submit'
              onClick={this.handleAddTransaction.bind(this)}
            />
            <LinkButton text='Cancel' onClick={() => { }} />
          </form>

          { this.shouldRedirect.call(this) }

        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ securities }) => {
  const { group, ticker, quantity, purchasePrice, success } = securities.transaction;
  return {
    group,
    ticker,
    quantity,
    purchasePrice,
    success,
  };
}

const mapDispatchToProps = {
  updateField,
  addTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
