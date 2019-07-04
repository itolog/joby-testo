import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './customer.css'

import { AppState } from '../../store/index'
import { getCustomers } from '../../store/customers/selectors'

// STORE PROPS
const mapStateToProps = (state: AppState) => {
    return {
      customers: getCustomers(state),
    };
  };
  
  type Props =
      & ReturnType<typeof mapStateToProps>
      ;

class Customer extends PureComponent<Props, {}> {
    render() {
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
                )
              })}
             </tbody>
            </table>
          );
    }
}

export default connect(mapStateToProps)(Customer);