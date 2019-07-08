import axios from 'axios';

export const fetchService = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
      .then(({data}: any) => {
        resolve(data)
      })
      .catch(e => {
        reject(e.message)
      });
  })
};

export const fetchCustomerService = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
      .then(({data}: any) => {
    resolve(data.customers);
    })
    .catch(e => {
    reject(e.message);
    });
  })
};

export const fetchProductsService = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
      .then(({data}: any) => {
        console.log(data)
        resolve(data.products);
      })
      .catch(e => {
        reject(e.message);
      });
  })
};