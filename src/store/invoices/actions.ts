import { action, ActionType } from 'typesafe-actions';
import { Invoices } from './types'


export enum ActionTypes {
  // GET_PRODUCTS_FROM_SERVER = "GET_PRODUCTS_FROM_SERVER"
}

export const Actions = {
  // addTodo: (payload: Products) => action(ActionTypes.GET_PRODUCTS_FROM_SERVER, payload)
};

export type ActionTypeUnion = ActionType<typeof Actions>;