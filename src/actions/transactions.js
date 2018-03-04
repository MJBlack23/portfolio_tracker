import { UPDATE_FIELD, ADD_TRANSACTION } from './types';

export const updateField = (field, value) => (
  {
    type: UPDATE_FIELD,
    payload: { field, value },
  }
);

export const addTransaction = (transaction) => (
  {
    type: ADD_TRANSACTION,
    payload: transaction,
  }
);