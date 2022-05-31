import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import { enterNewPassword } from 'features/auth/authSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmNewPassword } from 'validation/Schema';
import LoadingScreen from '../LoadingScreen';
import { CatchError, Form } from './styles';

function ConfirmForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: confirmNewPassword,
    onSubmit: (values) => {
      const body = {
        old: values.password,
        new: values.confirmPassword
      };
      dispatch(enterNewPassword(body))
        .then((data) => {
          if (data.payload) {
            navigate('/login', { state: values.email });
          }
        })
        .catch((error) => error);
    }
  });

  return (
    <AuthLayout>
      {isLoading === true && <LoadingScreen />}
      <Form onSubmit={formik.handleSubmit}>
        <Card className="signup-card">
          <p className="signup-header">Reset Your Password</p>
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
            <CatchError>{formik.errors.password}</CatchError>
          ) : null}
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <CatchError>{formik.errors.confirmPassword}</CatchError>
          ) : null}
          <div className="reg__btn">
            <Button auth type="submit">
              Done
            </Button>
          </div>
        </Card>
      </Form>
    </AuthLayout>
  );
}

export default ConfirmForgotPassword;
