import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Actions } from '../../store/invoices/actions';

import { Actions as ActionsCustomers} from '../../store/customers/actions'
import { Customers } from '../../store/customers/types';

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
  fetchCustomer: (data: Customers[]) => dispatch(ActionsCustomers.fetchCustomersSuccess(data))
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & MainProps
  & ReturnType<typeof mapDispatchToProps>
  ;


class MainPage extends React.PureComponent<Props,{}> {
  componentDidMount() {
    console.log(1)
    this.props.fetchCustomer([
      {
        id: 1,
        name: 'Jack Mack',
        address: 'nowiny 34',
        phone: '+380394567788'
      },
      {
        id: 2,
        name: 'Lord Bord',
        address: 'nowiny 2',
        phone: '+380334533792'
      }

    ])
  }
  // Вынести в компонент кнопку
   toView = (id: number) => {
    this.props.history.push(`/view/`);
    this.props.setInvoiceId(id);
  };

 public render() {
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
       {this.props.invoices.map((item) => {
         return (
           <tr key={item.id.toString()}>
             <td>{item.id}</td>
             <td>{item.customer_id}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
// ({ invoices, history, setInvoiceId, fetchCustomer }: Props)