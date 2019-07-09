import axios from 'axios';

export default class ProductsService {
  static getProducts() {
    return new Promise((resolve, reject) => {
      axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
        .then(({data}: any) => {
          resolve(data.products);
        })
        .catch(e => {
          reject(e.message);
        });
    })
  }
}