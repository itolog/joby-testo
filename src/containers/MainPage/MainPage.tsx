import React from 'react';
import { connect } from 'react-redux';

import { compose, Dispatch } from 'redux';

import { Actions } from '../../store/invoices/actions';


import { getInvoices } from '../../store/invoices/selectors';
import { getCustomersState } from '../../store/customers/selectors'
import { AppState } from '../../store';
import {withRouter, RouteComponentProps} from 'react-router-dom';

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    invoices: getInvoices(state),
    customers: getCustomersState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setInvoiceId: (id: number) => dispatch(Actions.setCurrentIdInvoice(id)),
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps
  ;


class MainPage extends React.PureComponent<Props,{}> {
  // Вынести в компонент кнопку
   toView = (id: number) => {
    this.props.history.push(`/view/`);
    this.props.setInvoiceId(id);
  };

 public render() {
   const { invoices, customers } = this.props;
   return (
      <table className='table'>
        <tbody>
        <tr className='table-title'>
          <th>Invoice ID</th>
          <th>Customer Name</th>
          <th>Discount <br/>
            (%)
          </th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        {invoices.map((item) => {
          return (
            <tr key={item.id.toString()}>
              <td>{item.id}</td>
              <td>{customers.customers[item.customer_id].name}</td>
              <td>{item.discount}</td>
              <td>{item.total}</td>
              <td>
                <button className='invoices-btn invoices-btn--view' onClick={() => this.toView(item.id)}>View</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
   );
 }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage) as any;