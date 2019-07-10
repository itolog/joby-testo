import { Epic, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
//
import { Actions, ActionTypes, ActionTypeUnion } from './actions';
import {  mergeMap, map, catchError, tap } from 'rxjs/operators';
import CustomersService from '../../shared/services/customersService';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';


export const fetchCustomersEpic: Epic<ActionTypeUnion, any> = (action$) => {
  return action$.pipe(
   ofType(ActionTypes.FETCH_CUSTOMERS_START),
   mergeMap((): any => {
     return from(CustomersService.getCustomers()).pipe(
       map((res: any )=> Actions.fetchCustomersSuccess(res)),
       catchError((err): any => of(Actions.fetchCustomersError(err)))
     )
   })
  )
};




//
// export const fetchCustomersEpic: Epic<ActionTypeUnion, any> = (action$) => {
//   return action$.pipe(
//     filter(isOfType(ActionTypes.FETCH_CUSTOMERS_START)),
//     mergeMap((): any => {
//         ajax.getJSON(`http://www.mocky.io/v2/5d21cc652f00006f2cc46338`).pipe(
//           map((res: any) => Actions.fetchCustomersSuccess(res.customers)),
//           catchError((err): any => of(Actions.fetchCustomersError(err.message)))
//         );
//
//       }
//     )
//   )
// };

