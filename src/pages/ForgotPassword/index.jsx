import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import { forgotPassword } from 'features/auth/authSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotPasswordSchema } from 'validation/Schema';
import { FormWrapper, ReturnLoginLink } from './styles';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordSchema,

    onSubmit: (values) => {
      const body = {
        email: values.email
      };

      dispatch(forgotPassword(body)).then((data) => {
        console.log(data);
        if (data.payload) {
          navigate('/resend-verification', { state: values.email });
        }
      });
    }
  });

  return (
    <AuthLayout>
      <FormWrapper onSubmit={formik.handleSubmit}>
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
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <Button type="submit" className="recovery-button">
            Send Recovery Link
          </Button>
          <ReturnLoginLink to="/login">Return to login</ReturnLoginLink>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default ForgotPassword;
