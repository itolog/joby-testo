import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

// import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';

import { StateType } from "typesafe-actions";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as productsReducer } from "./products/reducers";
import { reducer as customersReducer } from "./customers/reducers";
import { reducer as invoicesReducer } from "./invoices/reducers";

import { fetchCustomers } from './customers/actions';
import { fetchProducts } from './products/actions';


// import {  fetchCustomersEpic } from './customers/epics';

// const rootEpic = combineEpics(
//   fetchCustomersEpic
// );

const epicMiddleware = createEpicMiddleware();

const reducer = combineReducers({
  products: productsReducer,
  customers: customersReducer,
  invoices: invoicesReducer
});

export type AppState = StateType<typeof reducer>;

function configureStore(preloadedState: any) {
  const middlewares = [thunkMiddleware, epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  store.dispatch<any>(fetchCustomers());
  store.dispatch<any>(fetchProducts());
  // epicMiddleware.run(rootEpic);
  return store;
}

export const rootStore = configureStore(undefined);
