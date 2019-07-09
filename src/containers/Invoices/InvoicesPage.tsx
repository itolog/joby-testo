import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';

import './invoices.css';
import { getInvoices } from '../../store/invoices/selectors';
import { getCustomersState } from '../../store/customers/selectors'
import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Actions } from '../../store/invoices/actions';


interface Router {
  history: History
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    invoices: getInvoices(state),
    customer: getCustomersState(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setInvoiceId: (id: number) => dispatch(Actions.setCurrentIdInvoice(id))
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & Router
  & ReturnType<typeof mapDispatchToProps>
  ;


class InvoicesPage extends PureComponent<Props, {}> {

  toView = (id: number) => {
    this.props.history.push(`/view/`);
    this.props.setInvoiceId(id);
  };

  toEdit = () => {
    this.props.history.push(`/edit`);
  };

  public render() {
    const { invoices, customer } = this.props;
    console.log(customer);
    return (
      <div className='invoices'>
        <table className='table'>
          <tbody>
          <tr className='table-title'>
            <th>Invoice ID</th>
            <th>Customer Name</th>
            <th>Discount %</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          {invoices.map((item) => {
            return (
              <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>{customer.customers[item.customer_id].name}</td>
                <td>{item.discount}</td>
                <td>{item.total}</td>
                <td>
                  <button className='invoices-btn invoices-btn--view' onClick={() => this.toView(item.id)}>View</button>
                  <button className='invoices-btn invoices-btn--edit' onClick={this.toEdit}>Edit</button>
                  <button className='invoices-btn invoices-btn--delete'>Delete</button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesPage);
