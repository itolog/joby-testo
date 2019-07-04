import { action, ActionType } from 'typesafe-actions';
import { Products } from './types';

export enum ActionTypes {
  GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
}

export const Actions = {
  addTodo: (payload: Products) => action(ActionTypes.GET_PRODUCT_BY_ID, payload)
};

export type ActionTypeUnion = ActionType<typeof Actions>;
