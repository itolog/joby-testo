import { createSelector } from 'reselect';

import { AppState } from '../index';
import { InvoiseState } from './types';

export const getInvoiceState = (state: AppState ) => state.invoices;

export const getInvoices = createSelector(
 [ getInvoiceState],
  (state: InvoiseState) => Object.values(state.invoices)
);

export const getActiveInvoicesCount = createSelector(
  [getInvoiceState],
  (state: InvoiseState) => Object.keys(state.invoices).length
);

export const getInvoiceById = createSelector(
  getInvoiceState,
  (state: InvoiseState) => state.invoices[state.currentIdInvoice]
);

export const genereteNextIdInvoice = createSelector(
  getInvoiceState,
  (state: InvoiseState) => {
    const invoiceIdsArray = Object.keys(state.invoices).map(Number);
    return Math.max.apply(null, invoiceIdsArray);
  }
);