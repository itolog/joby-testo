import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
// import { isActionOf } from 'typesafe-actions';
//
// import { AppState } from '../index';
//
import {  ActionTypes, ActionTypeUnion } from './actions';
// import { mergeMap } from 'rxjs/operators';
//
// import { Customers } from './types';
// import { AppState } from '../index';


export const fetchCustomersEpic = (action$: Observable<ActionTypeUnion>):  Observable<ActionTypeUnion> => {
  return action$.pipe(
    ofType(ActionTypes.FETCH_CUSTOMERS_START)
    // mergeMap(action => {
    //   return Actions.fetchCustomersSuccess(action.payload)
    // })
    // filter(isOfType(ActionTypes.FETCH_CUSTOMERS_START)),
    // mapTo(Actions.fetchCustomersSuccess(fetchCustomerServiceSO()))
  );
};

  //   switchMap(action =>
  //     from(fetchCustomerServiceSO()).pipe(
  //       map((res: any) => Actions.fetchCustomersSuccess(res)),
  //       catchError(error => of(Actions.fetchCustomersError(error)))
  //     ),
  //   )
  // );
