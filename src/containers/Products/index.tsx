import React, { Component } from 'react';
import { connect } from 'react-redux';

import './products.css'
import { AppState } from '../../store';
import { getProducts } from '../../store/products/selectors';

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    products: getProducts(state),
  };
};

type Props =
    & ReturnType<typeof mapStateToProps>
    ;

class Products extends Component<Props, {}> {
  public render() {
    const { products } = this.props;
    return (
      <table className='table'>    
       <tbody>
       <tr className='table-title'>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
        {products.map((item) => {
          return (
            <tr key={item.id.toString()}>
              <td>{item.name}</td>
              <td>{item.price} $</td>
            </tr>
          )
        })}
       </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(Products);