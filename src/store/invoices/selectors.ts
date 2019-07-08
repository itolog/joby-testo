import { createSelector } from 'reselect';

import { AppState } from '../index';
import { InvoiseState } from './types';

export const getInvoiceState = (state: AppState ) => state.invoices;

export const getInvoices = createSelector(
 [ getInvoiceState],
  (state: InvoiseState) => Object.values(state.invoices)
);

export const getActiveInvoices = (state: AppState) => Object.keys(state.invoices.invoices).length;

export const getInvoiceById = (state: AppState) =>  {
  return state.invoices.invoices[state.invoices.currentIdInvoice]
};

export const genereteNextIdInvoice = (state: AppState) => {
  const invoiceIdsArray = Object.keys(state.invoices.invoices).map(Number);
  return Math.max.apply(null, invoiceIdsArray);
};