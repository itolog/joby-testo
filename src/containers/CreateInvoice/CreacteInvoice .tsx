import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../../store/customers/selectors';
import { getProducts } from '../../store/products/selectors';
import { AppState } from '../../store';

import './createInvoice.css'

interface State {
  optionRefName: string,
  optionRefProduct: string
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

  public state = {
    optionRefName: '',
    optionRefProduct: ''
  };

  public handleOptionSelectName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      optionRefName: e.target.value
    });

  };

  public handleOptionSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      optionRefProduct: e.target.value
    });
  };

  public handleOptionSelectQut = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  };

  render() {
    const { customers } = this.props;
    console.log(this.state);
    return (
      <div className='view-container'>
        <div className='view-left'>
          <h4 className='viev-title-id'>Invoice #4</h4>
          <div className='view-text-content'>
            <div className='select-style'>
              <select className='name-select' onChange={this.handleOptionSelectName}>
                {customers.map((item: any) => {
                  return (
                    <option
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
                  <select className='name-select' onChange={this.handleOptionSelectProduct}>
                    {this.props.products.map((item: any) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}>{item.name}</option>
                      )
                    })}
                  </ select>
                </td>
                <td>
                  <div className="select-editable">
                    <select className="select-editable" onChange={this.handleOptionSelectQut}>
                      <option value="115x175 mm">11</option>
                      <option value="120x160 mm">12</option>
                      <option value="120x287 mm">12</option>
                    </select>
                    <input maxLength={2} type="text" name="format" placeholder='0' />
                  </div>
                </td>
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
