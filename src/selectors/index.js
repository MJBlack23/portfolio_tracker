import { createSelector } from 'reselect';

const getTransactions = state => state.securities.transactions;
const getSecurities = state => state.securities.securities;

export const getValues = createSelector(
  [getTransactions, getSecurities],
  (transactions, securities) => {
    const response = [];

    transactions.forEach((transaction) => {
      const [exists] = response.filter(s => s.ticker === transaction.ticker);
      if (exists) {
        exists.quantity += transaction.quantity;
        exists.purchasePrice = (exists.purchasePrice + transaction.purchasePrice) / exists.quantity;
      } else {
        response.push({
          ...transaction,
          price: securities[transaction.ticker] ? securities[transaction.ticker] : transaction.purchasePrice,
        });
      }
    });

    response.sort((a, b) => {
      if (a.ticker < b.ticker) return -1;
      if (a.ticker > b.ticker) return 1;
      return 0;
    });

    return response;
  }
)