import { AppState } from '../index';

export const getInvoices = (state: AppState) => {
  const invoices = [];
  for (const key in state.invoices.invoices){
    if(state.invoices.invoices.hasOwnProperty(key) && state.customers.customers[state.invoices.invoices[key].customer_id])  {
      invoices.push({
        id: state.invoices.invoices[key].id,
        customer_id: state.customers.customers[state.invoices.invoices[key].customer_id].name,
        discount: state.invoices.invoices[key].discount,
        total: state.invoices.invoices[key].total,
        items: state.invoices.invoices[key].items,

      })
    }
  }

  return invoices
};

export const getActiveInvoices = (state: AppState) => Object.keys(state.invoices.invoices).length;

export const getInvoiceById = (state: AppState) =>  {
  return state.invoices.invoices[state.invoices.currentIdInvoice]
};