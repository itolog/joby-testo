import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
 GET_CUSTOMER_BY_ID = 'GET_CUSTOMER_BY_ID'
}

export const Actions = {
  addCustomer: (id: number) => action(ActionTypes.GET_CUSTOMER_BY_ID, id)
};

export type ActionTypeUnion = ActionType<typeof Actions>;