import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from './containers/Products/';
import Customers from './containers/Customers/';
import Invoices from './containers/Invoices'
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <main className='main'>
            <Route path='/products/' component={Products} />
            <Route path='/customers/' component={Customers} />
            <Route path='/invoices/' exact component={Invoices} />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
