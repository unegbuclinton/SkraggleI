import React from "react";

import { useFormik } from "formik";
import { loginSchema } from "Validation/Schema";

import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";

import { FormWrapper, LoginLink, ErrorMsg } from "./styles";

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
          <h1 className="login-heading">Log In</h1>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
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
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          ) : null}
          <LoginLink className="forgot-password" to={"/forgot-password"}>
            Forgot Password?
          </LoginLink>
          <Button auth>LOG IN</Button>
          <label>
            Don’t have any account?
            <LoginLink className="signup" to="/sign-up">
              {" "}
              Sign Up
            </LoginLink>
          </label>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default LogIn;
