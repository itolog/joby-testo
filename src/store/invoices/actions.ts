import { action, ActionType } from 'typesafe-actions';


export enum ActionTypes {
  SET_CURRENT_ID_INVOICE = 'CURRENT_ID_INVOICE'
}

export const Actions = {
  setCurrentIdInvoice: (id: number) => action(ActionTypes.SET_CURRENT_ID_INVOICE, id)
};

export type ActionTypeUnion = ActionType<typeof Actions>;