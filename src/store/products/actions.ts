import { action, ActionType } from 'typesafe-actions';
import { Products } from './types';

export enum ActionTypes {
  FETCH_PRODUCTS_START = ' FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export const Actions = {
  fetchProductsStart: () => action(ActionTypes.FETCH_PRODUCTS_START),
  fetchProductsSuccess: (payload: Products[]) => action(ActionTypes.FETCH_PRODUCTS_SUCCESS, payload),
  fetchProductsError: (error: string) => action(ActionTypes.FETCH_PRODUCTS_FAILURE, error)
};


export type ActionTypeUnion = ActionType<typeof Actions>;
