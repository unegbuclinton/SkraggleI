import * as Yup from "yup";

export const registrationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("invalid Mail").required("Email is Required"),
  password: Yup.string().required('Password is required').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,'Password is not strong'),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Passwords do not match')
});

export const resetSchema =Yup.object({
  email: Yup.string().email("invalid Mail").required("Email is Required"),
  password: Yup.string().required('Password is required').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,'Password is not strong')
})

export const loginSchema =Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().required('Password is Required')
})

export const forgotPasswordSchema =Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
})
