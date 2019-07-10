import data from '../../mockData.json';

export default class InvoicesService {
  static fetchInvoices () {
     return new Promise((resolve) => {
       resolve(data.invoices);
     })
  }
}