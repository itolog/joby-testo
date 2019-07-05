import { AppState } from '../index';

export const getCustomers = (state: AppState) => {
  const customers = [];
  for (const key in state.customers.customers){
    if(state.customers.customers.hasOwnProperty(key))  {
      customers.push({
        id: state.customers.customers[key].id,
        name: state.customers.customers[key].name,
        address: state.customers.customers[key].address,
        phone: state.customers.customers[key].phone

      })
    }
  }

  return customers;
};