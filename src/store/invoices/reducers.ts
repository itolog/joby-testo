import {  InvoiseState } from './types';
import { ActionTypes, ActionTypeUnion } from './actions';

const initialState: InvoiseState = {
  currentIdInvoice: 1,
  invoices: {
    10: {
      id:  10,
      customer_id: 1,
      discount: 10,
      total: 2,
      items: [
        {
          id: 8,
          invoice_id: 10,
          product_id: 1,
          quantity: 2
        },
        {
          id: 9,
          invoice_id: 10,
          product_id: 2,
          quantity: 1
        }
      ]
    },
    11: {
      id:  11,
      customer_id: 2,
      discount: 15,
      total: 3,
      items: [
        {
          id: 33,
          invoice_id: 11,
          product_id: 1,
          quantity: 2
        },
        {
          id: 44,
          invoice_id: 11,
          product_id: 3,
          quantity: 1
        }
      ]
    }
  }
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): InvoiseState {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_ID_INVOICE: {
      return {
        ...state,
        currentIdInvoice: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
