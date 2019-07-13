import axios from 'axios';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======

// export default class CustomersService {
//    static getCustomers() {
//     return new Promise((resolve, reject) => {
//       axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
//         .then(({data}: any) => {
//           resolve(data.customers);
//         })
//         .catch(e => {
//           reject(e.message);
//         });
//     })
//   }
// }
>>>>>>> ce3e446864fbe2d00cd0f77c941cd356c76c02c2

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