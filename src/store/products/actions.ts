import { action, ActionType } from 'typesafe-actions';
import { Products } from './types';
import { Dispatch } from 'redux';
import { fetchProductsService } from '../../shared/services/fetchService'
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';

export enum ActionTypes {
  FETCH_PRODUCTS_START = ' FETCH_PRODUCTS_START,',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS,',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export const Actions = {
  fetchProductsStart: () => action(ActionTypes.FETCH_PRODUCTS_START),
  fetchProductsSuccess: (payload: Products[]) => action(ActionTypes.FETCH_PRODUCTS_SUCCESS, payload),
  fetchProductsError: (error: string) => action(ActionTypes.FETCH_PRODUCTS_FAILURE, error)
};

export const fetchProducts = (): ThunkAction<void, AppState, null, ActionTypeUnion> => async(dispatch: Dispatch) => {
  dispatch(Actions.fetchProductsStart());

  await fetchProductsService()
    .then((data: any) => {
      dispatch(Actions.fetchProductsSuccess(data))
    })
    .catch(e => {
      dispatch(Actions.fetchProductsError(`fetch products: ${e}`))
    })
};

export type ActionTypeUnion = ActionType<typeof Actions>;
