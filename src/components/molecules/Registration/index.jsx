import React from 'react';
import { Form, CatchError } from './styles';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Card from 'components/atoms/Card';
import { registrationSchema } from 'validation/Schema';

function Registration() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <AuthLayout>
      <Form onSubmit={formik.handleSubmit}>
        <Card className="signup-card">
          <p className="signup-header"> Sign up</p>
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
              Sign up
            </Button>
          </div>

          <div className="promp-text">
            <p> Have any account? </p>

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
