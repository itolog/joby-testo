import React, {useEffect} from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import {  RouteComponentProps, withRouter } from 'react-router-dom';

import './logo.css'

type Props = & RouteComponentProps
function Logo(props: Props) {
    useEffect(() => {
        console.log(props)
    })
    const toMainPage = () => {
        props.history.push('/');
        if(props.match.path == '/invoices/') {
            console.log("object");
        }
    }
    return (
        <div className='logo' onClick={toMainPage} >
            Logo
        </div>
    )
}
export default compose(
    withRouter
)(Logo)