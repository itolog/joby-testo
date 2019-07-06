import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductsPage from './containers/Products/ProductsPage';
import CustomersPage from './containers/Customers/CustomersPage';
import InvoicesPage from './containers/Invoices/InvoicesPage';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import MainPage from './components/MainPage/MainPage';
import ViewPage from './containers/ViewPage';
import CreateInvoice from './containers/CreateInvoice/CreacteInvoice '

import './App.css';

import { Actions as ActionsC } from './store/customers/actions';
import { Actions as ActionsP } from './store/products/actions';

import { Customers } from './store/customers/types';
import { Products } from './store/products/types';
import { Dispatch } from 'redux';

const data = [
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

];
const dataP = [
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCustomers: (data: Customers[]) => dispatch(ActionsC.fetchCustomersSuccess(data)),
  fetchProducts: (data: Products[]) => dispatch(ActionsP.fetchProductsSuccess(data))
});


type Props = & ReturnType<typeof mapDispatchToProps>;


class App extends PureComponent<Props, {}>{

  componentDidMount() {
    this.props.fetchCustomers(data);
    this.props.fetchProducts(dataP);
  }
 public render() {
   return (
     <Router>
       <div className='App'>
         <div className='container'>
           <Header />
           <main className='main'>

             <Switch>
               <Route exact path="/" render={() => (

                   <Redirect to="/main"/>

               )}/>

               <Route path='/main' exact  component={MainPage} />
               <Route path='/products/' component={ProductsPage} />
               <Route path='/customers/' component={CustomersPage} />
               <Route path='/invoices/'  component={InvoicesPage} />
               <Route path='/view/' component={ViewPage} />
               <Route path='/createInvoice/' component={CreateInvoice} />
               <Route component={NoMatch}/>
             </Switch>
           </main>
         </div>
       </div>
     </Router>
   );
 }
}

export default connect(null, mapDispatchToProps)(App);
