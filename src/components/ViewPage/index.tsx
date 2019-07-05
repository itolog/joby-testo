import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import discountCalculator from '../../Utils/discountCalculator'
import { getInvoiceById } from '../../store/invoices/selectors';
import { AppState } from '../../store';


// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    invoices: getInvoiceById(state)
  };
};

type Props =
  & ReturnType<typeof mapStateToProps>
  ;


function ViewPage(props: Props) {

  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>{discountCalculator(69.97, 13)}</h1>
  )
}

export default connect(mapStateToProps)(ViewPage);