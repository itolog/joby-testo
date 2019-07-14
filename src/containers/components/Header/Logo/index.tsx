import React, {useEffect} from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import {  RouteComponentProps, withRouter } from 'react-router-dom';

import './logo.css'
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
      return {
        formValue: state,
      }
    };

type Props = & RouteComponentProps & ReturnType<typeof mapStateToProps>

function Logo(props: Props) {
    useEffect(() => {
       
    })
    const toMainPage = () => {
        // props.history.push('/');
        if(props.formValue.form.addInvoice) {
            if (props.formValue.form.addInvoice.anyTouched === true && !props.formValue.invoices.isInvoiceSaved) {
                if(window.confirm("no save...go main?")) {
                    props.history.push('/')
                }
                    // console.log('ds',props)  
            } else {
                props.history.push('/')
            }
              
        }
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
    withRouter,
    connect(mapStateToProps)
)(Logo) as any