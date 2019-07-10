import axios from 'axios';
import { Observable } from 'rxjs';

// export default class ProductsService {
//   static getProducts() {
//     return new Promise((resolve, reject) => {
//       axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
//         .then(({data}: any) => {
//           resolve(data.products);
//         })
//         .catch(e => {
//           reject(e.message);
//         });
//     })
//   }
// }

export default class ProductsService {
  static getProducts() {
    return new Observable(subscribe => {
      axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
        .then(({data}: any) => {
          subscribe.next(data.products);
          subscribe.complete();
        })
        .catch(e => {
          subscribe.error(e.message);
        });
    })
  }
}