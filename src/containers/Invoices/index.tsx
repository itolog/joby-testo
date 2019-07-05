import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';

import './invoices.css';
import { getInvoices } from '../../store/invoices/selectors';
import { AppState } from '../../store';


interface Router {
  history: History
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    invoices: getInvoices(state)
  };
};

type Props =
  & ReturnType<typeof mapStateToProps>
  & Router
  ;


class Invoices extends PureComponent<Props, {}> {

  public toView = () => {
    this.props.history.push(`/view`);
  };

  public toEdit = () => {
    this.props.history.push(`/edit`);
  };

  public render() {
    const { invoices } = this.props;
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
                <td>{item.customer_id}</td>
                <td>{item.discount}</td>
                <td>{item.total}</td>
                <td>
                  <button className='invoices-btn invoices-btn--view' onClick={this.toView}>View</button>
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

export default connect(mapStateToProps)(Invoices);
