import { AppState } from '../index';
import * as  R from 'ramda';

export const getCustomers = (state: AppState) => {
  return R.values(state.customers.customers);
};

export const getCustomersError = (state: AppState) => state.customers.error;