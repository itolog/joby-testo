import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCustomers } from '../../store/customers/selectors';
import { getProducts } from '../../store/products/selectors';
import { genereteNextIdInvoice } from '../../store/invoices/selectors'
import { AppState } from '../../store';

import './createInvoice.css'

interface State {
  optionRefName: string,
  optionRefProduct: string,
  optionRefQty: number,
  optionRefDiscaunt: number,
  price: number,
  discount: number,
  nextId: number
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    customers: getCustomers(state),
    products: getProducts(state),
    nextIDs: genereteNextIdInvoice(state)
  };
};

type Props =
  & ReturnType<typeof mapStateToProps>
  ;

class CreacteInvoice  extends PureComponent<Props, State> {

  public state = {
    optionRefName: '',
    optionRefProduct: '',
    optionRefQty: 1,
    optionRefDiscaunt: 1,
    price: 1,
    discount: 0,
    nextId: this.props.nextIDs +1
  };

  public componentDidUpdate(prevProps: any, prevState: any) {
    if(prevState.optionRefProduct !== this.state.optionRefProduct || prevState.optionRefQty !== this.state.optionRefQty) {
      this.setState({
        price: this.props.products[Number(this.state.optionRefProduct) -1].price * this.state.optionRefQty
      })
    }
  }
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

  public handleOptionSelectQty = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(e.target.value);
    this.setState({
      optionRefQty: qty
    })
  };

  public handleOptionSelectDiscaunt = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>  {
    const discaunt = Number(e.target.value);
    this.setState({
      optionRefDiscaunt: discaunt
    })
  };

  render() {
    const { customers, products } = this.props;
    const rangeQty = [1,2,3];
    const rangeDiscaunt = [1,2,3];

    console.log(this.state);
    return (
      <div className='view-container'>
        <div className='view-left'>
          <h4 className='viev-title-id'>Invoice #{this.state.nextId}</h4>
          {/*  ======= Customer =================== */}
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
              {/* ======  Product  ======= */}
              <tr>
                <td className='select-style'>
                  <select className='name-select' onChange={this.handleOptionSelectProduct} defaultValue='2'>
                    {products.map((item: any) => {
                      return (
                        <option
                          key={item.id}
                          // selected={'motorola maxx' ? true: false}
                          value={item.id}>{item.name}</option>
                      )
                    })}
                  </ select>
                </td>
                {/* ==========  quantity ==========*/}
                <td className='item-focus'>
                  <div className="select-editable">
                    <select className="select-editable" onChange={this.handleOptionSelectQty}>
                      {rangeQty.map((val: any) => {
                        return (
                          <option key={val} value={val}>{val}</option>
                        )
                      })}
                    </select>
                    <input
                      className='item-focus'
                      maxLength={2}
                      type="text"
                      name="format"
                      onChange={this.handleOptionSelectQty}
                      value={this.state.optionRefQty}
                      />
                  </div>
                </td>
                {/* ============= Price =============  */}
                <td  className='item-focus'>{
                  this.state.price
                }</td>
              </tr>
              </tbody>
            </table>
            <hr/>
            {/* =================  Total ===========   */}
            <div className='product-total'>
              <div className='total-title'>total</div>
              <div className='total-count'>10</div>
            </div>
          </div>
        </div>
        {/* =====================  Discount =========   */}
        <div className='view-right'>
          <div className='viev-discount-title'>Discount %</div>
          <div className='view-discount-number select-editable'>
            <select className="select-editable" onChange={this.handleOptionSelectDiscaunt}>
              {rangeDiscaunt.map((val: any) => {
                return (
                  <option key={val} value={val}>{val}</option>
                )
              })}
            </select>
            <input
              className='item-focus'
              maxLength={2}
              type="text"
              name="format"
              onChange={this.handleOptionSelectDiscaunt}
              value={this.state.optionRefDiscaunt}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CreacteInvoice);
