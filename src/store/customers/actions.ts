import { action, ActionType } from 'typesafe-actions';
// import { Dispatch } from 'redux';
import { Customers } from './types';

export enum ActionTypes {
  FETCH_CUSTOMERS_START = ' FETCH_CUSTOMERS_START,',
  FETCH_CUSTOMERS_SUCCESS = '  FETCH_CUSTOMERS_SUCCESS,',
  FETCH_CUSTOMERS_FAILURE = '  FETCH_CUSTOMERS_FAILURE',
 GET_CUSTOMER_BY_ID = 'GET_CUSTOMER_BY_ID'
}

export const Actions = {
  addCustomer: (id: number) => action(ActionTypes.GET_CUSTOMER_BY_ID, id),
  // FETCH
  fetchCustomersStart: () => action(ActionTypes.FETCH_CUSTOMERS_START),
  fetchCustomersSuccess: (payload: Customers[]) => action(ActionTypes.FETCH_CUSTOMERS_SUCCESS, payload),
  fetchCustomersError: (payload: any) => action(ActionTypes.FETCH_CUSTOMERS_FAILURE, payload)
};

// export const fetchCustomers = (data: Customers[]) => async (dispatch: Dispatch) => {
//   dispatch(Actions.fetchCustomersStart());
//
//   try {
//     dispatch(Actions.fetchCustomersSuccess(data))
//   } catch (e) {
//     dispatch(Actions.fetchCustomersError(e))
//   }
// };

export type ActionTypeUnion = ActionType<typeof Actions>;