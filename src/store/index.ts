import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { StateType } from "typesafe-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as productsReducer } from "./products/reducers";
import { reducer as customersReducer } from "./customers/reducers";

const reducer = combineReducers({
  products: productsReducer,
  customers: customersReducer
});

export type AppState = StateType<typeof reducer>;

function configureStore(preloadedState: any) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
}
export const rootStore = configureStore(undefined);
