import data from '../../mockData.json';
import { Observable } from 'rxjs';

export default class InvoicesService {
  static fetchInvoices () {
    return new Observable(subscriber => {
      subscriber.next(data.invoices);
      subscriber.complete();
    })
  }
}