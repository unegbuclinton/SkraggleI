import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import Spinner from 'components/atoms/Spinner/Spinner';
import AuthLayout from 'components/layouts/AuthLayout';
import { loginUser } from 'features/auth/authSlice';
import { userInfo } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import { DPIconGoogleIcon } from 'icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'validation/Schema';
import { DividerLeft, DividerRight, FormWrapper, GoogleLogin, LoginLink } from './styles';

const LogIn = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const body = {
        email: values.email,
        password: values.password
      };

      dispatch(loginUser(body)).then((data) => {
        if (data.payload) {
          dispatch(userInfo());
          navigate('/dashboard');
        }
      });
    }
  });

  return (
    <AuthLayout>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Card className="login-card">
          <h1 className="login-card__heading">Log In</h1>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            className="login-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <Input
            type="password"
            id="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <div className="forgot-password__container">
            <LoginLink className="forgot-password" to={'/forgotpassword'}>
              Forgot Password?
            </LoginLink>
          </div>
          <Button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? <Spinner /> : 'LOG IN'}
          </Button>
          <div className="divider-container">
            <DividerLeft />
            <p className="divider-text"> Or</p>
            <DividerRight />
          </div>
          <Button type="button" className="google-button ">
            <GoogleLogin>
              <DPIconGoogleIcon />
              <p className="google-text">Log in with Google</p>
            </GoogleLogin>
          </Button>
          <p className="login-card__signup-link">
            <span>Don’t have any account?</span>
            <LoginLink className="signup" to="/signup">
              Sign Up
            </LoginLink>
          </p>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default LogIn;
