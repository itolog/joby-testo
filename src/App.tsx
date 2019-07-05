import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './containers/Products';
import Customers from './containers/Customers';
import Invoices from './containers/Invoices';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import MainPage from './components/MainPage';
import ViewPage from  './components/ViewPage'

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <main className='main'>

            <Switch>
              <Route path='/' exact  component={MainPage} />
              <Route path='/products/' component={Products} />
              <Route path='/customers/' component={Customers} />
              <Route path='/invoices/'  component={Invoices} />
              <Route path='/view/' component={ViewPage} />
              <Route component={NoMatch}/>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
