import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import Requirements from 'components/atoms/PasswordRequirements/requirements';
import AuthLayout from 'components/layouts/AuthLayout';
import { registerUser } from 'features/auth/authSlice';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registrationSchema } from 'validation/Schema';
import LoadingScreen from '../LoadingScreen';
import { CatchError, Form } from './styles';

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [long, longEnough] = useState(false);
  const [number, hasNumber] = useState(false);
  const [password, hasPassword] = useState(false);
  const [lowerCase, isLowerCase] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: (values) => {
      !values.password ? hasPassword(false) : hasPassword(true);
      values.password.length < 8 ? longEnough(false) : longEnough(true);
      !/\d/.test(values.password) ? hasNumber(false) : hasNumber(true);
      !/[a-z]/.test(values.password) ? isLowerCase(false) : isLowerCase(true);
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      if (!long || !number || !password || !lowerCase) {
        formik.errors.password = "Your password doesn't currently meet the requirements";
        formik.setSubmitting(false);
      } else {
        const body = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          password: values.password
        };
        dispatch(registerUser(body))
          .then((data) => {
            if (data.payload.success) {
              navigate('/otp-verify', { state: values.email });
            }
          })
          .catch((error) => error);
      }
    }
  });

  return (
    <AuthLayout>
      {isLoading === true && <LoadingScreen />}
      <Form onSubmit={formik.handleSubmit}>
        <Card className="signup-card">
          <p className="signup-header">Sign up</p>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <CatchError>{formik.errors.firstName}</CatchError>
          ) : null}
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.valuelastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <CatchError>{formik.errors.lastName}</CatchError>
          ) : null}
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <CatchError>{formik.errors.email}</CatchError>
          ) : null}
          <Input
            type="password"
            id="password"
            required
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <CatchError>{formik.errors.password}</CatchError>
          ) : null}
          <Requirements long={long} number={number} required={password} lowercase={lowerCase} />
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
              Sign up
            </Button>
          </div>

          <div className="promp-text">
            <p> Already have an account?</p>

            <span>
              <Link className="promp-text__path" to="/login">
                Log In
              </Link>
            </span>
          </div>
          <div className="agreement-container">
            By signing up, I accept the Skraggle
            <Link className="agreement-container__terms" to="/">
              Terms of Service
            </Link>
            and the
            <Link className="agreement-container__terms" to="/">
              Privacy Policy.
            </Link>
          </div>
        </Card>
      </Form>
    </AuthLayout>
  );
}

export default Registration;
