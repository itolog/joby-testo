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
  }
  if (!values.discount) {
    errors.discount = 'Required';
  }
  return errors;
};

export default myValidator;