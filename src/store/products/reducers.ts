import { ProductsState } from './types';

import { ActionTypeUnion, ActionTypes } from './actions';

const initialState: ProductsState = {
  products: {
    1: {
      id: 1,
      name: 'motorola droid',
      price: 300
    },
    2: {
      id: 2,
      name: 'motorola maxx',
      price: 500
    },
    3: {
      id: 3,
      name: 'motorola ultra',
      price: 350
    }
  }
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): ProductsState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_FROM_SERVER: {
      return {
        ...state,
        products: {
          [action.payload.id]: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
}
