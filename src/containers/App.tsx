import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductsPage from './Products/ProductsPage';
import CustomersPage from './Customers/CustomersPage';
import InvoicesPage from './Invoices/InvoicesPage';
import Header from './components/Header';
import NoMatch from './NoMatch';
import MainPage from './MainPage/MainPage';
import ViewPage from './Invoices/ViewInvoice';
import CreateInvoice from './Invoices/CreateInvoice/CreacteInvoice';


import './App.css';


import { AppState } from '../store';
// Selectors import
import { getCustomersError, isLoadingCustomer } from '../store/customers/selectors';
import { getErrorProducts, isLoadingProdacts } from '../store/products/selectors'
import { Dispatch } from 'redux';
import { Actions } from '../store/invoices/actions';
import { Actions as ActionsCustomers } from '../store/customers/actions';


const mapStateToProps = (state: AppState) => {
  return {
    // customers
    customersError: getCustomersError(state),
    isLoadingCustomer: isLoadingCustomer(state),
    // products
    productsError: getErrorProducts(state),
    isLoadingProdacts: isLoadingProdacts(state)
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setInvoiceId: (id: number) => dispatch(Actions.setCurrentIdInvoice(id)),
  fetchCustomers: () => dispatch(ActionsCustomers.fetchCustomersStart())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;



class App extends PureComponent<Props, {}>{
  componentDidMount(): void {
    this.props.fetchCustomers()
  }

  public render() {
   const {isLoadingProdacts, isLoadingCustomer, customersError, productsError} = this.props;
   return (
     <Router>
       <div className='App'>
         <div className='container'>
           <Header />
           {isLoadingProdacts && isLoadingCustomer && <h1>Loading ...</h1>}
           {/*  ERROR  CONTENT */}
           {customersError && <h2>{customersError}</h2>}
           {productsError && <h2>{productsError}</h2>}
           {/*  MAIN CONTENT */}
           {!isLoadingProdacts &&  !isLoadingCustomer &&
           <main className='main'>
             <Switch>
               <Route path='/' exact  component={MainPage} />
               <Route path='/products/' component={ProductsPage} />
               <Route path='/customers/' component={CustomersPage} />

               <Route path='/invoices'  component={InvoicesPage} />
               <Route path='/invoice/create' component={CreateInvoice} />
               <Route path='/invoice/:id/view/' component={ViewPage} />

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
