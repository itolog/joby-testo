import { action, ActionType } from 'typesafe-actions';
import { Invoices } from './types';


export enum ActionTypes {
  FETCH_INVOICES_START = 'FETCH_INVOICES_START',
  FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS',
  FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE',
  SET_CURRENT_ID_INVOICE = 'SET_CURRENT_ID_INVOICE',
  ADD_INVOICE = 'ADD_INVOICE'
}

export const Actions = {
  setCurrentIdInvoice: (id: number) => action(ActionTypes.SET_CURRENT_ID_INVOICE, id),
  fetchInvoicesStart: () => action(ActionTypes.FETCH_INVOICES_START),
  fetchInvoicesSuccess: (payload: Invoices[]) => action(ActionTypes.FETCH_INVOICES_SUCCESS, payload),
  fetchInvoicesError: (payload: any) => action(ActionTypes.FETCH_INVOICES_FAILURE, payload),
  addInvoice: (payload: Invoices) => action(ActionTypes.ADD_INVOICE, payload)
};

export type ActionTypeUnion = ActionType<typeof Actions>;