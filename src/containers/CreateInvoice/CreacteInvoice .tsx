import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../../store/customers/selectors';
import { getProducts } from '../../store/products/selectors';
import { AppState } from '../../store';

import './createInvoice.css'

interface State {
  optionRef: string
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    customers: getCustomers(state),
    products: getProducts(state)
  };
};

type Props =
  & ReturnType<typeof mapStateToProps>
  ;

class CreacteInvoice  extends PureComponent<Props, State> {
  private optionRef: React.RefObject<HTMLOptionElement> = React.createRef();

  public state = {
    optionRef: ''
  };

  public handleOptionSelect = (e: any) => {
    this.setState({
      optionRef: e.target.value
    });

  };

  render() {
    const { customers } = this.props;
    console.log(this.state.optionRef);

    return (
      <div className='view-container'>
        <div className='view-left'>
          <h4 className='viev-title-id'>Invoice #4</h4>
          <div className='view-text-content'>
            <div className='select-style'>
              <select  onChange={this.handleOptionSelect}>
                {customers.map(item => {
                  return (
                    <option
                      ref={this.optionRef}
                      key={item.id}
                      value={item.id}>{item.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='view-products'>
            <table className='view-table'>
              <tbody>
              <tr>
                <th className='view-table--title'>Products</th>
                <th className='view-table--title'>Qty</th>
                <th className='view-table--title'>Price</th>
              </tr>
              <tr>
                <td className='select-style'>
                  <select  onChange={this.handleOptionSelect}>
                    {this.props.products.map(item => {
                      return (
                        <option
                          ref={this.optionRef}
                          key={item.id}
                          value={item.id}>{item.name}</option>
                      )
                    })}
                  </ select>
                </td>
                <td>2</td>
                <td>500</td>
              </tr>
              </tbody>
            </table>
            <hr/>
            <div className='product-total'>
              <div className='total-title'>total</div>
              <div className='total-count'>10</div>
            </div>
          </div>
        </div>
        <div className='view-right'>
          <div className='viev-discount-title'>Discount %</div>
          <div className='view-discount-number'>10</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CreacteInvoice);
