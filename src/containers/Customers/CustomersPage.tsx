import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './customer.css';

import { AppState } from '../../store';
import  { Customers } from '../../store/customers/types';
import { Actions } from '../../store/customers/actions';
import { getCustomers } from '../../store/customers/selectors';
import { Dispatch } from 'redux';

const data =[
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
  },

];

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    customers: getCustomers(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCustomers: (data: Customers[]) => dispatch(Actions.fetchCustomersSuccess(data))
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

class CustomersPage extends PureComponent<Props, {}> {

  public componentDidMount() {
    this.props.fetchCustomers(data)
  };

  public render() {
    const { customers } = this.props;
    return (
      <table className='table'>
        <tbody>
        <tr className='table-title'>
          <th>Customer Name</th>
          <th>Customer Address</th>
          <th>Customer Phone number</th>
        </tr>
        {customers.map((item) => {
          return (
            <tr key={item.id.toString()}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);