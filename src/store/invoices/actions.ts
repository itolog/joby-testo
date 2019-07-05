import { action, ActionType } from 'typesafe-actions';
import { Invoices } from './types'


export enum ActionTypes {
  // GET_INVOICE_BY_ID = 'GET_INVOICE_BY_ID'
  CURRENT_ID_INVOICE = 'CURRENT_ID_INVOICE'
}

export const Actions = {
  // getInvoiceById: (id: number) => action(ActionTypes.GET_INVOICE_BY_ID, id)
  setCurrentIdInvoice: (id: number) => action(ActionTypes.CURRENT_ID_INVOICE, id)
};

export type ActionTypeUnion = ActionType<typeof Actions>;