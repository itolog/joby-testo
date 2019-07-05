import {  InvoiseState } from './types';
import { ActionTypes, ActionTypeUnion } from '../products/actions';

const initialState: InvoiseState = {
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
          product_id: 2,
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

    default: {
      return state;
    }
  }
}
