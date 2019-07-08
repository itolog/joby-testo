import { createSelector } from 'reselect';

import { AppState } from '../index';
import { CustomersState } from './types';

export const getCustomersState = (state: AppState) => state.customers;

export const getCustomersError = createSelector(
  getCustomersState,
  (state: CustomersState) => state.error
);

export const getCustomers = createSelector(
  getCustomersState,
  (state: CustomersState) => state.ids.map((id) => state.customers[id])
);

export const isLoadingCustomer = createSelector(
  getCustomersState,
  (state: CustomersState) => state.isLoading
);