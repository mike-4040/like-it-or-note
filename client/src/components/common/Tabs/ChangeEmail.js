import React from 'react';
import TabPanel from './TabPanel';
import { Formik, Form } from 'formik';
import TableForm from './TableForm';

export default function ChangeEmail({ value, index }) {
  const initialState = {
    email: '',
    confirmEmail: ''
  };

  let data = {
    text: ` Here you can change your email, please provide your new email and confirm it, then press submit`,
    fields: [
      { name: 'email', label: 'New Email', type: 'email' },
      { name: 'confirmEmail', label: 'Confirm email', type: 'email' }
    ]
  };

  const handleSubmit = async (values, { setErrors }) => {
    console.log('values', values);
  };
  return (
    <TabPanel value={value} index={index}>
      <Formik
        // validationSchema={signUpValidationSchema}
        initialValues={initialState}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <TableForm errors={errors} touched={touched} data={data} />
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
}
