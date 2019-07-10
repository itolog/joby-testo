import {  InvoiseState } from './types';
import { ActionTypes, ActionTypeUnion } from './actions';

const initialState: InvoiseState = {
  currentIdInvoice: 1,
  ids: [],
  isLoading: true,
  error: null,
  invoices: {}
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): InvoiseState {
  switch (action.type) {
    case ActionTypes.FETCH_INVOICES_SUCCESS: {
      const invoices = action.payload.reduce((acc, invoice) => ({
        ...acc,
        [invoice.id]: invoice,
      }), state.invoices);

      const ids = Object.keys(invoices).map(Number);

      return {
        ...state,
        ids,
        isLoading: false,
        invoices
      }
    }
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
