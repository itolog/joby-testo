import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getCustomers } from '../../../store/customers/selectors';
import { getProducts, getProductState } from '../../../store/products/selectors';
import { getCurrenInvoiceId, getInvoiceById } from '../../../store/invoices/selectors';

import './editInvoice.css';

import EditForm from './EditForm/EditForm';
import { Dispatch } from 'redux';
import { Actions as ActionsProducts } from '../../../store/products/actions';
import { Actions as ActionsCustomers } from '../../../store/customers/actions';

const mapStateToProps = (state: AppState) => {
  return {
    customers: getCustomers(state),
    products: getProducts(state),
    currentIdInvoice: getCurrenInvoiceId(state),
    getInvoiceById: getInvoiceById(state),
    productState: getProductState(state),
    formValue: state.form
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchProducts: () => dispatch(ActionsProducts.fetchProductsStart()),
  fetchCustomers: () => dispatch(ActionsCustomers.fetchCustomersStart())
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

function EditInvoice(props: Props) {

  useEffect(() => {
    // props.fetchCustomers();
    // props.fetchProducts();
    console.log(props.getInvoiceById);
  });

  return (
    <div className='edit-container'>
      <h4 className='viev-title-id'>Invoice #{props.currentIdInvoice}</h4>
      <div className='edit-content'>
        <EditForm
        products={props.products}
        customers={props.customers}
        invoice={props.getInvoiceById}
        productsState={props.productState}
      />
        {/* FORM RIGHT PART */}
        <div className='form-right'>
          <div className='viev-discount-title'>Discount %</div>
          <div className='view-discount-number'> { props.getInvoiceById.discount }</div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInvoice);