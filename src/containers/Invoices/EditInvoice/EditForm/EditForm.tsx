import React, { useState } from 'react';
import {  Field, reduxForm } from 'redux-form';
import { Products, ProductsState } from '../../../../store/products/types';
import { Customers } from '../../../../store/customers/types';
import { Invoices } from '../../../../store/invoices/types';

interface FormProps {
  products: Products[],
  customers: Customers[],
  invoice: Invoices,
  productsState: ProductsState
}

type Props = &
  FormProps

function EditForm (props: Props) {


  const [price, setPrice] = useState(1);
  const [optionProduct, setOptionProduct] = useState('');
  const [optionQty, setOptionQty] = useState('');

  const handleOptionSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionProduct(e.target.value);
  };
  const handleOptionSelectQty = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    setOptionQty(e.target.value);
  };

    return (
        <form className='edit-form'>
          {/* Field Select Customer */}
          <Field
            className='name-select'
            name="customer"
            component="select"
            // onChange={handleOptionSelectName}
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
              {/* TASKS FROM INVOICE  */}

                  {props.invoice.items.map((item: any) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Field
                            className='name-select'
                            name={`item-${item.id}`}
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
                        <td>
                          <Field
                            component="input"
                            type='number'
                            name='qty'
                            min='1'
                            className="select-editable"
                            // onChange={handleOptionSelectQty}
                          >
                          </Field>
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
                    <Field
                      component="input"
                      type='number'
                      name='qty'
                      min='1'
                      className="select-editable"
                      onChange={handleOptionSelectQty}
                    >
                    </Field>

                </td>
                {/* ============= Price =============  */}
                <td className='item-focus'>
                  {props.products && optionQty !== '' && props.products[Number(optionProduct) - 1].price * Number(optionQty)}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </form>
    );
}

export default reduxForm<{}, Props>({
  form: 'editForm',
})(EditForm);