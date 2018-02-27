import { UPDATE_FIELD, ADD_TRANSACTION } from './types';

export const updateField = (field, value) => {
  return {
    type: UPDATE_FIELD,
    payload: { field, value },
  };
}

export const addTransaction = (transaction) => {
  console.log('action');
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
}