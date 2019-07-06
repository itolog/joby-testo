import { ProductsState } from './types';

import { ActionTypeUnion, ActionTypes } from './actions';
import * as R from 'ramda';

const initialState: ProductsState = {
  products: {},
  error: ''
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): ProductsState {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS: {
      const newValues = R.indexBy(R.prop('id'), action.payload);
      const products = R.merge(state.products, newValues);
      return {
        ...state,
        products
      }
    }
    case ActionTypes.FETCH_PRODUCTS_FAILURE: {
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
