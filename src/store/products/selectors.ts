import { AppState } from '../index';
import * as R from 'ramda';

export const getProductState = (state: AppState) => state.products.products;

export const getErrorProducts = (state: AppState) => state.products.error;

export const getProducts = (state: AppState) => {
  return R.values(state.products.products);
};
