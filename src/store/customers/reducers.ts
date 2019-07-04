import { CustomersState } from './types';
import { ActionTypeUnion, ActionTypes } from './actions';

const initialState: CustomersState = {
    customers: [
        {
          id: 1,
          name: "Jack Mack",
          address: 'nowiny 34',
          phone: '+380394567788'
        },
        {
            id: 2,
            name: "Lord Bord",
            address: 'nowiny 2',
            phone: '+380334533792'
          },
      ]
}
  
  export function reducer(
    state = initialState,
    action: ActionTypeUnion
  ): CustomersState {
    switch (action.type) {
     case ActionTypes.ADD_CUSTOMER: {
         return {
             ...state,
             customers: [
                 ...state.customers,
                 action.payload
             ]
         }
     }
      default: {
        return state;
      }
    }
  }
  