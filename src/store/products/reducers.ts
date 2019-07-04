import { Products } from "./types";

import { ActionTypeUnion, ActionTypes } from "./actions";

const initialState: Products[] = [
  {
    id: 1,
    name: "motorola droid",
    price: 300
  },
  {
    id: 2,
    name: "motorola maxx",
    price: 500
  },
  {
    id: 3,
    name: "motorola ultra",
    price: 350
  }
];

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): Products[] {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_BY_ID: {
      return state.filter((item) => item.id === action.payload);
    }

    default: {
      return state;
    }
  }
}
