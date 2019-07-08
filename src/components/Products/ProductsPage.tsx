import React, { Component } from 'react';
import { connect } from 'react-redux';

import './products.css';
import { AppState } from '../../store';
import { getProducts, getErrorProducts } from '../../store/products/selectors';


// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    products: getProducts(state),
    error: getErrorProducts(state)
  };
};

type Props =
  & ReturnType<typeof mapStateToProps>
  ;

class ProductsPage extends Component<Props, {}> {


  public render() {
    const { products, error } = this.props;
   if(error === '') {
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
           );
         })}
         </tbody>
       </table>
     );
   } else {
     return(
       <h1>{error}</h1>
     )
   }
  }
}

export default connect(mapStateToProps)(ProductsPage);