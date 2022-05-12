import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('invalid Mail').required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'Password is not strong'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Passwords do not match'),
});

export const resetSchema = Yup.object({
  email: Yup.string().email('invalid Mail').required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'Password is not strong'
    ),
});

export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is Required'),
});

export const createContactValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Last name is required'),
  email: Yup.string().email('invalid Mail').required('Email is required'),
  // emailSucription: Yup.string().required("Email Subscription is required"),
  // date: Yup.string().required("Date is required"),
  // month: Yup.string().required("Month is required"),
  // year: Yup.string().required("Year is required"),
  company: Yup.string().required('Company is required'),
});

// export const createContactStepTwoValidationSchema = Yup.object({

// })

export const createCompanyValidatonSchema = Yup.object({
  companyName: Yup.string().required('Company name is required'),
  primaryPhone: Yup.string().required('Primary phone is required'),
  tags: Yup.string().required('Tag is required'),
});

export const houseHoldValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});

export const tagValidationSchema = Yup.object({
  tag: Yup.string().required('Tag is required'),
});

export const segmentValidationSchema = Yup.object({
  segment: Yup.string().required('Segment is required'),
});
