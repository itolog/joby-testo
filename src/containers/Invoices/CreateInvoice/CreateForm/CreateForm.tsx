import React, { useState, useEffect } from 'react';
import myValidator from '../validate';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';


interface Props {
  products: any,
  customers: any
}

function CreateForm(props: Props) {
  const [optionName, setOptionName] = useState('');
  const [optionProduct, setOptionProduct] = useState('');
  const [optionQty, setOptionQty] = useState('');
  const [optionDiscaunt, setOptionDiscaunt] = useState('');
  const [price, setPrice] = useState(1);

  const handleOptionSelectName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionName(e.target.value);
  };
  const handleOptionSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionProduct(e.target.value);
  };
  const handleOptionSelectQty = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    setOptionQty(e.target.value);
  };

  const handleOptionSelectDiscaunt = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    // const discaunt = Number(e.target.value);
    setOptionDiscaunt(e.target.value);
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

  };

  const setPriseDynimic = () => {
    setPrice(props.products[Number(optionProduct) - 1].price * Number(optionQty));
  };

  useEffect(() => {
    if (props.products && optionQty !== '') {
      setPriseDynimic();
    }

  });

  return (
    <>
      <form
        className='create-form'
        // onSubmit={submitForm}
      >
        {/*{errorValidate && <h4>{errorValidate}</h4>}*/}
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
                {/* ======  Product  ======= */}
                <tr>
                  <td className='select-style'>
                    <Field
                      className='name-select'
                      name='product'
                      onChange={handleOptionSelectProduct}
                      component="select"
                    >
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
              <Field
                className="select-editable"
                name='discount'
                component="input"
                type='number'
                onChange={handleOptionSelectDiscaunt}
              >
              </Field>
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

export default reduxForm<{}, Props>({ form: 'addInvoice', validate: myValidator })(CreateForm);