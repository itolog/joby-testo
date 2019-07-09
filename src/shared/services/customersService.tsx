import axios from 'axios';

export default class CustomersService {
   static getCustomers() {
    return new Promise((resolve, reject) => {
      axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
        .then(({data}: any) => {
          resolve(data.customers);
        })
        .catch(e => {
          reject(e.message);
        });
    })
  }
}