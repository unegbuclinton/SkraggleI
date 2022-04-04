import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "validation/Schema";
import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import ErrorMessage from "components/atoms/ErrorMessage";

import { FormWrapper, LoginLink } from "./styles";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            value={formik.values.password}
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
          <LoginLink className="forgot-password" to={"/forgotpassword"}>
            Forgot Password?
          </LoginLink>
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
