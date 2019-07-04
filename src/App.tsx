import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from './containers/Products/';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <main className='main'>
            {/* <Route path='/' exact component={Index} /> */}
            <Route path='/products/' component={Products} />
            {/* <Route path='/users/' component={Users} /> */}
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
