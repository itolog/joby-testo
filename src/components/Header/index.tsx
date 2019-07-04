import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

import InvoiceButton from '../../UI/InvoiceButton/InvoiceButton';
import Logo from '../Logo'

export default function Header() {
  return (
    <header className='header'>
     <Logo />
      <nav className='navigation'>
        <ul className='navigation-tabs'>
          <li className='navigation-items'>
            <NavLink to='/customers/'  activeClassName='is-active'>Customers</NavLink>
          </li>
          <li className='navigation-items'>
            <NavLink to='/products/' activeClassName='is-active'>Products</NavLink>
          </li>
          <li className='navigation-items'>
            <NavLink to='/invoices/'  activeClassName='is-active'>Invoices</NavLink>
          </li>
        </ul>
      </nav>
      <InvoiceButton />
    </header>
  );
}
