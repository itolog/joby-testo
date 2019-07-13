import { Observable } from 'rxjs';

import data from '../../mockData.json';
export default class InvoicesService {
  static fetchInvoices () {
     return new Observable(subscriber => {
      subscriber.next(data.invoices);
      subscriber.complete();
     })
  }
}