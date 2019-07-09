import React from 'react'
import { NavLink } from 'react-router-dom';

import './logo.css'

export default function Logo() {
    return (
        <div className='logo'>
            <NavLink to='/'>LOGO</NavLink>
        </div>
    )
}
