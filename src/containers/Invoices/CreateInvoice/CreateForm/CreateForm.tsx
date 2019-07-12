import React, { useState, useEffect } from 'react';
import myValidator from './validate';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { Products } from '../../../../store/products/types';
import { Customers } from '../../../../store/customers/types';
import { Dispatch } from 'redux';
import { Invoices } from '../../../../store/invoices/types';
import { Actions } from '../../../../store/invoices/actions';
import discountCalculator from '../../../../shared/utils/discountCalculator';
import { AppState } from '../../../../store';
import { getProductState } from '../../../../store/products/selectors';

interface PropsOwn {
  products: Products[],
  customers: Customers[],
  invoice: Invoices,
  nextId: number,
  endsUrl: boolean
}


const mapStateToProps = (state: AppState) => {
  return {
    formValue: state.form,
    productState: getProductState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addInvoice: (payload: Invoices) => dispatch(Actions.addInvoice(payload))
});


type Props =
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>
  & PropsOwn
  ;


function CreateForm(props: Props) {

  const [optionName, setOptionName] = useState('');
  const [optionProduct, setOptionProduct] = useState('');
  const [optionQty, setOptionQty] = useState('');
  const [optionDiscaunt, setOptionDiscaunt] = useState('');
  const [price, setPrice] = useState(1);

  const [targetValueTask, setTargetValueTask] = useState({})

  // ERRORS
  const [errors, setErrors] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOptionSelectName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionName(e.target.value);
  };
  const handleOptionSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionProduct(e.target.value);
  };
  const handleOptionSelectQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionQty(e.target.value);
  };

  const handleOptionSelectDiscaunt = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionDiscaunt(e.target.value);
  };

  const setPriseDynimic = () => {
    setPrice(props.products[Number(optionProduct) - 1].price * Number(optionQty));
  };

  // const handleOptionTaskQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   let targetValue = {
  //     [e.target.name]: e.target.value
  //   }
  //   setTargetValueTask((prevState) => {
  //       return {...prevState, [e.target.name]: e.target.value}
  //   });
  //
  // };


  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(props.formValue.addInvoice);
    // Validation
    if ('syncErrors' in props.formValue.addInvoice) {
      const syncErrors: {} = props.formValue.addInvoice['syncErrors'];
      setErrors(`Fields : ${Object.keys(syncErrors)} is required`);
      setIsError(true);
    } else {
      // props.history.push('/invoices/');
      setErrors('');
      setIsError(false);
    }


    const invoice = {
      id: props.nextId,
      customer_id: Number(optionName),
      discount: Number(optionDiscaunt),
      total: discountCalculator(price, Number(optionDiscaunt)),
      items: [{
        id: Math.random() + Math.random(),
        invoice_id: props.nextId,
        product_id: Number(optionProduct),
        quantity: Number(optionQty)
      }]
    };
    if (!isError) {
      props.addInvoice(invoice);
    }

  };


  useEffect(() => {
      if (props.products && optionQty !== '') {
        setPriseDynimic();
      }
      if (props.formValue.addInvoice) {
        console.log(props.formValue.addInvoice.values);
      }

    }
    // [props.products]
  );

  return (
    <>
      <form
        className='create-form'
        onSubmit={submitForm}
      >
        {errors && <h4>{errors}</h4>}
        <div className='form-content'>
          {/* FORM LEFT PART */}
          <div className='form-left'>
            {/* Field Select Customer */}
            <Field
              className='name-select'
              name="customer"
              component="select"
              onChange={handleOptionSelectName}
            >
              <option>choice customer</option>
              {props.customers.map((item: any) => {
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
                {/* TASKS FROM INVOICE  */}

                {props.invoice && props.endsUrl && props.invoice.items.map((item: any) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Field
                          className='name-select'
                          name={`product-${item.id}`}
                          // onChange={handleOptionSelectProduct}
                          component="select"
                        >

                          {props.products.map((items: any) => {
                              return (
                                <option
                                  key={items.id}
                                  value={items.id}>{items.name}</option>
                              )
                            }
                          )}

                        </Field>
                      </td>
                      <td >
                        {/*  task qty */}
                        <Field
                          component="input"
                          type='number'
                          name={`qty-${item.id}`}
                          min='1'
                          className="select-editable"
                          // onChange={handleOptionTaskQty}
                        >
                        </Field>
                      </td>
                      <td>
                        {props.productState.products[item.product_id].price}
                      </td>
                    </tr>
                  );
                })}
                {/* ======  Product  ======= */}
                <tr>
                  <td className='select-style'>
                    <Field
                      className='name-select'
                      name='product'
                      onChange={handleOptionSelectProduct}
                      component="select"
                    >
                      <option>add product</option>
                      {props.products.map((item: any) => {
                        return (
                          <option
                            key={item.id}
                            value={item.id}>{item.name}</option>
                        );
                      })}
                    </ Field>
                  </td>
                  {/* ==========  quantity ==========*/}
                  <td className='item-focus'>
                    <div>
                      <Field
                        component="input"
                        type='number'
                        name='qty'
                        min='1'
                        className="select-editable"
                        onChange={handleOptionSelectQty}
                      >
                      </Field>
                    </div>

                  </td>
                  {/* ============= Price =============  */}
                  <td className='item-focus'>
                    {price}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FORM RIGHT PART */}
          <div className='form-right'>
            <div className='viev-discount-title'>Discount %</div>
            <div className='view-discount-number'>
              {/*  mathc create page */}
             {!props.endsUrl && <Field
                className="select-editable"
                name='discount'
                component="input"
                type='number'
                min='1'
                max='50'
                onChange={handleOptionSelectDiscaunt}
              >
              </Field>}
              {/*  mathc edit page */}
              {props.endsUrl && props.invoice &&  <span>{props.invoice.discount}</span>}
            </div>
          </div>
        </div>
        {/* ===========  SUBMIT BUTTON =========   */}
        <button
          type="submit"
          // disabled={submitting}
          className='submit-button'>Save invoice
        </button>
      </form>
    </>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm<{}, Props>({ form: 'addInvoice', validate: myValidator }
  )(CreateForm));
