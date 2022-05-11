import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import { useFormik } from 'formik';
import React from 'react';
import { forgotPasswordSchema } from 'validation/Schema';
import { FormWrapper, ReturnLoginLink } from './styles';

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validationSchema: forgotPasswordSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <AuthLayout>
      <FormWrapper>
        <Card className="forgot-password">
          <h1 className="forgot-password__heading">Can’t log in?</h1>
          <p className="forgot-password__paragraph">We will send a recovery link to</p>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <Button className="recovery-button">Send Recovery Link</Button>
          <ReturnLoginLink to="/login">Return to login</ReturnLoginLink>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default ForgotPassword;
