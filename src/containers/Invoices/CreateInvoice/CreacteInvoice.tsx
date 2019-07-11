import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

import { getCustomers } from '../../../store/customers/selectors';
import { getProducts } from '../../../store/products/selectors';
import { genereteNextIdInvoice } from '../../../store/invoices/selectors';
import { AppState } from '../../../store';

import './createInvoice.css';
import { Customers } from '../../../store/customers/types';
import { Products } from '../../../store/products/types';
import discountCalculator from '../../../shared/utils/discountCalculator';
import { Dispatch } from 'redux';
import { Actions } from '../../../store/invoices/actions';
import { Invoices } from '../../../store/invoices/types';

import myValidator from './validate';

interface FormData extends RouteComponentProps {
  customers: Customers[];
  products: Products[];
  nextIDs: number;
  formValue: any,
  addInvoice: (payload: Invoices) => any
}

interface State {
  optionRefName: string,
  optionRefProduct: string,
  optionRefQty: number,
  optionRefDiscaunt: number,
  price: number,
  discount: number,
  nextId: number,
  isSaved: boolean,
  errorValidate: any,
  isError: boolean
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    customers: getCustomers(state),
    products: getProducts(state),
    nextIDs: genereteNextIdInvoice(state),
    formValue: state.form
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addInvoice: (payload: Invoices) => dispatch(Actions.addInvoice(payload))
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & InjectedFormProps<{}, FormData>
  & RouteComponentProps
  ;

class CreacteInvoice extends PureComponent<Props, State> {

  public state = {
    isSaved: false,
    optionRefName: '',
    optionRefProduct: '',
    optionRefQty: 1,
    optionRefDiscaunt: 1,
    price: 1,
    discount: 0,
    nextId: this.props.nextIDs + 1,
    errorValidate: null,
    isError: false
  };

  public componentDidMount(): void {

  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.optionRefProduct !== this.state.optionRefProduct || prevState.optionRefQty !== this.state.optionRefQty) {
      this.setState({
        price: this.props.products[Number(this.state.optionRefProduct) - 1].price * this.state.optionRefQty
      });
    }
  }

  public handleOptionSelectName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      optionRefName: e.target.value
    });

  };

  public handleOptionSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      optionRefProduct: e.target.value
    });
  };

  public handleOptionSelectQty = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(e.target.value);
    this.setState({
      optionRefQty: qty
    });
  };

  public handleOptionSelectDiscaunt = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const discaunt = Number(e.target.value);
    this.setState({
      optionRefDiscaunt: discaunt
    });
  };

  public submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { values } = this.props.formValue.addInvoice;
    console.log(this.props);
    if ('syncErrors' in this.props.formValue.addInvoice) {
      const syncErrors: {} = this.props.formValue.addInvoice['syncErrors'];
      this.setState({
        errorValidate: `Fields : ${Object.keys(syncErrors)} is required`,
        isError: true
      });
    } else {
      this.props.history.push('/invoices/')
      this.setState({
        errorValidate: null,
        isError: false
      });
    }

    if (!values) {
      this.setState({
        errorValidate: 'no empty field',
        isError: true
      });
    } else {
      this.setState({
        isError: false
      })
    }

    if (values !== undefined) {
      this.props.addInvoice({
        id: this.state.nextId,
        customer_id: values.customer,
        discount: values.discount,
        total: discountCalculator(this.state.price, this.state.optionRefDiscaunt),
        items: [{
          id: 90,
          invoice_id: this.state.nextId,
          product_id: values.product,
          quantity: values.qty
        }]
      });
    }
  };


  render() {
    const { customers, products, submitting } = this.props;
    const rangeQty = [1, 2, 3];
    const rangeDiscaunt = [1, 2, 3];

    return (
      <div className='create-container'>
        <h4 className='viev-title-id'>Invoice #{this.state.nextId}</h4>
        <form className='create-form' onSubmit={this.submitForm}>
          {this.state.errorValidate && <h4>{this.state.errorValidate}</h4>}
          <div className='form-content'>
            {/* FORM LEFT PART */}
            <div className='form-left'>
              {/* Field Select Customer */}
              <Field
                className='name-select'
                name="customer"
                component="select"
                onChange={this.handleOptionSelectName}
              >
                <option></option>
                {customers.map((item: any) => {
                  return (
                    <option
                      key={item.id}
                      value={item.id}>{item.name}</option>
                  );
                })}
              </Field>
              {/* SELECT PRODUCT SECTION  */}
              <div className='view-products'>
                <table className='view-table create-table'>
                  <tbody>
                  <tr>
                    <th className='view-table--title'>Products</th>
                    <th className='view-table--title'>Qty</th>
                    <th className='view-table--title'>Price</th>
                  </tr>
                  {/* ======  Product  ======= */}
                  <tr>
                    <td className='select-style'>
                      <Field
                        className='name-select'
                        name='product'
                        onChange={this.handleOptionSelectProduct}
                        component="select"
                      >
                        <option></option>
                        {products.map((item: any) => {
                          return (
                            <option
                              key={item.id}
                              // selected={'motorola maxx' ? true: false}
                              value={item.id}>{item.name}</option>
                          );
                        })}
                      </ Field>
                    </td>
                    {/* ==========  quantity ==========*/}
                    <td className='item-focus'>
                      <div className="select-editable">
                        <Field
                          component="select"
                          name='qty'
                          className="select-editable"
                          onChange={this.handleOptionSelectQty}
                        >
                          <option></option>
                          {rangeQty.map((val: any) => {
                            return (
                              <option key={val} value={val}>{val}</option>
                            );
                          })}
                        </Field>
                      </div>

                    </td>
                    {/* ============= Price =============  */}
                    <td className='item-focus'>{
                      this.state.price
                    }</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FORM RIGHT PART */}
            <div className='form-right'>
              <div className='viev-discount-title'>Discount %</div>
              <div className='view-discount-number select-editable'>
                <Field
                  className="select-editable"
                  name='discount'
                  component="select"
                  onChange={this.handleOptionSelectDiscaunt}
                >
                  <option></option>
                  {rangeDiscaunt.map((val: any) => {
                    return (
                      <option key={val} value={val}>{val}</option>
                    );
                  })}
                </Field>
              </div>
            </div>
          </div>
          {/* ===========  SUBMIT BUTTON =========   */}
          <button type="submit" disabled={submitting} className='submit-button'>Save invoice</button>
        </form>
        {/* =================  Total ===========   */}
        <div className='product-total'>
          <div className='total-title'>total</div>
          <div className='total-count'>
            {
              discountCalculator(this.state.price, this.state.optionRefDiscaunt)
            }
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm<{}, FormData>({ form: 'addInvoice', validate: myValidator }
  )(CreacteInvoice));
