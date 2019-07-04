import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
}

export const Actions = {
  addTodo: (id: number) => action(ActionTypes.GET_PRODUCT_BY_ID, id)
};

export type ActionTypeUnion = ActionType<typeof Actions>;
