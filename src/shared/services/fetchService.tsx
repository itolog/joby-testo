import axios from 'axios';
import data from '../../mockData.json';

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
        resolve(data.products);
      })
      .catch(e => {
        reject(e.message);
      });
  })
};




//
// export const fetchService = () => {
//   return new Promise((resolve) => {
//     resolve(data);
//   })
// };


// export const fetchCustomerServiceSO = (): any => {
//     return data.customers
// };
export const fetchCustomerServiceSO = (): any => {
    return data.customers
};



// export const fetchProductsService = () => {
//   return new Promise((resolve, reject) => {
//     resolve(data.products)
//   })
// };
