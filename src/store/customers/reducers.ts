import { CustomersState } from './types';
import { ActionTypeUnion, ActionTypes } from './actions';
import * as R from 'ramda';

const initialState: CustomersState = {
  customers: {},
  error: ''
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): CustomersState {
  switch (action.type) {
    case ActionTypes.FETCH_CUSTOMERS_SUCCESS: {
      const newValues = R.indexBy(R.prop('id'), action.payload);
      const customers = R.merge(state.customers, newValues);
      return {
        ...state,
        customers
      }
    }
    case ActionTypes.FETCH_CUSTOMERS_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
  