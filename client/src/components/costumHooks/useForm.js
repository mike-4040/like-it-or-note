import { useState } from 'react';

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  console.log('values useForm', values);
  // console.log('initialValues', initialValues);
  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    // reset to what ever you pass in state
    state => {
      setValues({ ...state });
    }
  ];
};
export default useForm;