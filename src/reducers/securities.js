import uuid from 'uuid/v4';

import { ADD_TRANSACTION, REMOVE_TRANSACTION, UPDATE_FIELD } from '../actions/types';

const INITIAL_STATE = {
  transaction: {
    group: '',
    ticker: '',
    purchasePrice: '',
    quantity: '',
    success: true,
  },
  securities: {},
  transactions: [],
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
      const transaction = { 
        ...action.payload,
        quantity: parseInt(action.payload.quantity, 10),
        purchasePrice: parseFloat(action.payload.purchasePrice),
        uuid: uuid()
      };
      return { 
        ...state,
        transaction: {
          group: '',
          ticker: '',
          purchasePrice: '',
          quantity: '',
          success: true,
        },
        securities: {
          ...state.securities,
          [transaction.ticker]: ([transaction.ticker] in state.securities) ? state.securities[transaction.ticker] : 0,
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