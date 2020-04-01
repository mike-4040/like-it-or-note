import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
});

export const logInValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
});

export const recordFormValidationSchema = Yup.object({
  subject: Yup.string().required('Required'),
  categoryId: Yup.string().required('Required')
});

export const changeNameValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required')
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
});
