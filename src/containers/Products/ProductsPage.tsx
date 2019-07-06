import React, { Component } from 'react';
import { connect } from 'react-redux';

import './products.css';
import { AppState } from '../../store';
import { getProducts, getErrorProducts } from '../../store/products/selectors';
import { Products } from '../../store/products/types';
import { Actions } from '../../store/products/actions';
import { Dispatch } from 'redux';


const data = [
  {
    id: 1,
    name: 'motorola droid',
    price: 300
  }, {
    id: 2,
    name: 'motorola maxx',
    price: 500
  },
  {
    id: 3,
    name: 'motorola ultra',
    price: 350
  }

];


// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    products: getProducts(state),
    error: getErrorProducts(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCustomers: (data: Products[]) => dispatch(Actions.fetchProductsSuccess(data)),
  fetchCustomersError: (data: any) => dispatch(Actions.fetchProductsError(data))
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

class ProductsPage extends Component<Props, {}> {

  componentDidMount() {
    try {
      this.props.fetchCustomers(data);
    } catch (e) {
      this.props.fetchCustomersError(e.message)
    }
  };

  public render() {
    const { products, error } = this.props;
   if(error  === '') {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);