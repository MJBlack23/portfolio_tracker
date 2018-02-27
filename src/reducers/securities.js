import uuid from 'uuid/v4';

import { ADD_TRANSACTION, REMOVE_TRANSACTION, UPDATE_FIELD } from '../actions/types';

const INITIAL_STATE = {
  transaction: {
    group: '',
    ticker: '',
    purchasePrice: '',
    quantity: '',
  },
  securities: {
    MSFT: 95.42,
    COKE: 185.62,
    MDB: 30.87,
  },
  transactions: [
    { ticker: 'MSFT', purchasePrice: 94.08, quantity: 3, group: 'test' },
    { ticker: 'MSFT', purchasePrice: 105.15, quantity: 1, group: 'test' },
    { ticker: 'COKE', purchasePrice: 182.17, quantity: 18, group: 'test' },
    { ticker: 'MDB', purchasePrice: 31.82, quantity: 10, group: 'test' },
  ],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      /** Update the value of a field */
      return { 
        ...state,
        transaction: { 
          ...state.transaction,
          [action.payload.field]: action.payload.value 
        }
      };

    case ADD_TRANSACTION:
      /** Add to Transaction array */
      const transaction = { ...action.payload, uuid: uuid() };
      console.log('reducer', transaction);
      return { 
        ...state,
        transaction: {
          group: '',
          ticker: '',
          purchasePrice: '',
          quantity: '',
        },
        transactions: [...state.transactions, transaction] 
      };

    case REMOVE_TRANSACTION:
      /** Remove from Transaction Array */
      return { ...state, transactions: this.state.transactions.filter(t => t.uuid !== action.payload) };


    default:
      return state;
  }
}