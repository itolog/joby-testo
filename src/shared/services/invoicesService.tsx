import { Observable } from 'rxjs';

import data from '../../mockData.json';
import { Observable } from 'rxjs';

// export default class InvoicesService {
//   static fetchInvoices () {
//      return new Promise((resolve) => {
//        resolve(data.invoices);
//      })
//   }
// }
export default class InvoicesService {
  static fetchInvoices () {
<<<<<<< HEAD
    return new Observable(subscriber => {
      subscriber.next(data.invoices);
      subscriber.complete();
    })
=======
     return new Observable(subscriber => {
      subscriber.next(data.invoices);
      subscriber.complete();
     })
>>>>>>> ce3e446864fbe2d00cd0f77c941cd356c76c02c2
  }
}