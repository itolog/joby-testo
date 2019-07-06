import { AppState } from '../index';

export const getProductState = (state: AppState) => state.products.products;

export const getErrorProducts = (state: AppState) => state.products.error;

export const getProducts = (state: AppState) => {
  const products = [];
  for (const key in state.products.products){
    if(state.products.products.hasOwnProperty(key))  {
      products.push({
        id: state.products.products[key].id,
        name: state.products.products[key].name,
        price: state.products.products[key].price

      })
    }
  }
  return products;
};
