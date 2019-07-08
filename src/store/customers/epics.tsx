// import { Epic } from 'redux-observable';
// import { from, of } from 'rxjs';
// import { switchMap, filter, map, catchError } from 'rxjs/operators';
// import { isActionOf } from 'typesafe-actions';
//
// import { AppState } from '../index';
//
// import { ActionTypeUnion } from './actions';
//
// import  { fetchCustomerServiceSO } from '../../shared/services/fetchService';
//
// import { ActionTypes, Actions } from './actions'
//
// export const fetchCustomers: Epic<ActionTypeUnion, ActionTypeUnion, AppState> = (action$: any)  =>
//   action$.pipe(
//     filter(isActionOf(Actions.fetchCustomersStart)),
//     switchMap((action) => {
//       from(fetchCustomerServiceSO()).pipe(
//         map((data: any) => {
//           Actions.fetchCustomersSuccess(data.customers)
//         }),
//         catchError(error => of(Actions.fetchCustomersError(error)))
//       )
//     })
// );

export {}
