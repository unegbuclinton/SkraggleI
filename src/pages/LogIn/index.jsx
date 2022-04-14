import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { persistedReducer } from 'store';
import { loginSchema } from 'validation/Schema';
import { FormWrapper, LoginLink } from './styles';

const LogIn = () => {
  const { auth } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(auth);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // dispatch(login({ token: 'fateh' }));
      navigate('/dashboard');
      persistedReducer.pause();
      persistedReducer.purge();
    },
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
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <div className="forgot-password__container">
            <LoginLink className="forgot-password" to={"/forgotpassword"}>
              Forgot Password?
            </LoginLink>
          </div>
          <Button className="login-button">LOG IN</Button>
          <p className="login-card__signup-link">
            <span>Don’t have any account?</span>
            <LoginLink className="signup" to="/signup">
              {" "}
              Sign Up
            </LoginLink>
          </p>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default LogIn;
