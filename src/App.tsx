import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import axios from 'axios';

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

interface State {
  isLoaded: boolean,
  error: string,
  isError: boolean
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCustomers: (data: Customers[]) => dispatch(ActionsC.fetchCustomersSuccess(data)),
  fetchProducts: (data: Products[]) => dispatch(ActionsP.fetchProductsSuccess(data))
});


type Props = & ReturnType<typeof mapDispatchToProps>;


class App extends PureComponent<Props, State>{
  public state = {
    isLoaded: false,
    isError: false,
    error: ''
  };

  componentDidMount() {
    this.fetchDataFromServer()
  }

  public fetchDataFromServer = () => {
    axios.get('http://www.mocky.io/v2/5d21cc652f00006f2cc46338')
      .then(({data}: any) => {
        this.props.fetchCustomers(data.customers);
        this.props.fetchProducts(data.products);

        this.setState({
          isLoaded: true
        })
      })
      .catch(e => {
        console.log(e.message);
        this.setState({
          isError: true,
          error: e.message
        })
      });
  };

 public render() {
   return (
     <Router>
       <div className='App'>
         <div className='container'>
           <Header />
           {!this.state.isLoaded && <h1>Loading ...</h1>}
           {/*  ERROR  CONTENT */}
           {this.state.error && <h2>{this.state.error}</h2>}
           {/*  MAIN CONTENT */}
           {this.state.isLoaded && <main className='main'>
             <Switch>
               <Route path='/' exact  component={MainPage} />
               <Route path='/products/' component={ProductsPage} />
               <Route path='/customers/' component={CustomersPage} />
               <Route path='/invoices/'  component={InvoicesPage} />
               <Route path='/view/' component={ViewPage} />
               <Route path='/createInvoice/' component={CreateInvoice} />
               <Route component={NoMatch}/>
             </Switch>
           </main>
           }
         </div>
       </div>
     </Router>
   );
 }
}

export default connect(null, mapDispatchToProps)(App);
