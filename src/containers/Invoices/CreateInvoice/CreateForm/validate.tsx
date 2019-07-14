const myValidator = (values: any) => {
  const errors: any = {};
  if (!values.product) {
    errors.product = 'Required';
  }

  if (!values.customer) {
    errors.customer = 'Required';
  }

  if (!values.qty) {
    errors.qty = 'Required';
  } else if (isNaN(Number(values.qty))) {
    errors.qty = 'Must be a number'
  } else if (Number(values.qty) > 10) {
    errors.qty = 'max value 10';
  } else if (Number(values.qty) <= 0 ) {
    errors.qty = 'min value 1';
  }


  if (!values.discount) {
    errors.discount = 'Required';
  }else if (isNaN(Number(values.discount))) {
    errors.discount = 'Must be a number'
  } else if (Number(values.discount) > 50) {
    errors.discount = 'max length 50';
  } else if (Number(values.discount) === 0 ) {
    errors.discount = 'min length 0';
  }
  return errors;
};

export default myValidator;