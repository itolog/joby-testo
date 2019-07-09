import { Dispatch } from 'redux';
import { action, ActionType } from 'typesafe-actions';
import { Customers } from './types';
import customersService from '../../shared/services/customersService';

export enum ActionTypes {
  FETCH_CUSTOMERS_START = 'FETCH_CUSTOMERS_START',
  FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS',
  FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE',
}

export const Actions = {
  fetchCustomersStart: () => action(ActionTypes.FETCH_CUSTOMERS_START),
  fetchCustomersSuccess: (payload: Customers[]) => action(ActionTypes.FETCH_CUSTOMERS_SUCCESS, payload),
  fetchCustomersError: (payload: any) => action(ActionTypes.FETCH_CUSTOMERS_FAILURE, payload)
};

export const fetchCustomers =  () => (dispatch: Dispatch) => {
  dispatch(Actions.fetchCustomersStart());
  customersService.getCustomers()
    .then((data: any) => {
      dispatch(Actions.fetchCustomersSuccess(data))
    })
    .catch(e => {
      dispatch(Actions.fetchCustomersError(`fetch customers: ${e}`))
    })
};

export type ActionTypeUnion = ActionType<typeof Actions>;