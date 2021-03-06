import axios from 'axios';
import { Observable } from 'rxjs';
export default class CustomersService {
  static getCustomers() {
    return new Observable(subscribe => {
      axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
        .then(({data}: any) => {
          subscribe.next(data.customers);
          subscribe.complete();
        })
        .catch(e => {
          subscribe.error(e.message);
        });
    })
  }
}