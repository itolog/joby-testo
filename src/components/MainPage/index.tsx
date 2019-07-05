import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import  { Actions } from '../../store/invoices/actions'
import { getInvoices } from '../../store/invoices/selectors';
import { AppState } from '../../store';
import { History } from 'history';

interface MainProps {
  history: History
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    invoices: getInvoices(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setInvoiceId: (id: number) => dispatch(Actions.setCurrentIdInvoice(id)),
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & MainProps
  & ReturnType<typeof mapDispatchToProps>
  ;


function MainPage({ invoices, history, setInvoiceId }: Props) {
  // Вынести в компонент кнопку
  function toView(id: number): void {
    history.push(`/view/`);
    setInvoiceId(id)
  }

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
            <td>{item.customer_id}</td>
            <td>{item.discount}</td>
            <td>{item.total}</td>
            <td>
              <button className='invoices-btn invoices-btn--view' onClick={() => toView(item.id)}>View</button>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
