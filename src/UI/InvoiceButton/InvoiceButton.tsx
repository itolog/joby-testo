import React from 'react';
import { Link } from 'react-router-dom';

import './invoiceButton.css';

export default function InvoiceButton() {
    return (
       <div className='wrapp-button'>
            <Link to='/'  className='invoice-button'>
                <span className='btn-plus'>+</span>
                <span>New Invoice</span>
            </Link>
       </div>
    )
}
