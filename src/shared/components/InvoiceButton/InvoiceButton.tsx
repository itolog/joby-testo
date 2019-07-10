import React from 'react';
import { NavLink } from 'react-router-dom';

import './invoiceButton.css';

export default function InvoiceButton() {
    return (
       <div className='wrapp-button'>
            <NavLink to='/invoices/create/'  className='invoice-button'>
                <span className='btn-plus'>+</span>
                <span>New Invoice</span>
            </NavLink>
       </div>
    )
}
