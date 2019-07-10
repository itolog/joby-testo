import { Observable } from 'rxjs';

import data from '../../mockData.json';

// export default class InvoicesService {
//   static fetchInvoices () {
//      return new Promise((resolve) => {
//        resolve(data.invoices);
//      })
//   }
// }
export default class InvoicesService {
  static fetchInvoices () {
     return new Observable(subscriber => {
      subscriber.next(data.invoices);
      subscriber.complete();
     })
  }
}