import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  ADD_CUSTOMER = 'ADD_CUSTOMER'
}

export const Actions = {
  addCustomer: (name: string, address: string, phone: string) => action(ActionTypes.ADD_CUSTOMER, {
    id: Math.random(),
    name,
    address,
    phone
  })
};

export type ActionTypeUnion = ActionType<typeof Actions>;