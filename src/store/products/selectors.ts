import { createSelector } from 'reselect';

import { AppState } from '../index';
import { ProductsState } from './types';


export const getProductState = (state: AppState) => state.products;

export const getErrorProducts = createSelector(
  getProductState,
  (state: ProductsState) => state.error
);

export const getProducts = createSelector(
  getProductState,
  (state: ProductsState) => {
    return  state.ids.map((id) => state.products[id])
  }
);

export const isLoadingProdacts = createSelector(
  getProductState,
  (state: ProductsState) => state.isLoading
);