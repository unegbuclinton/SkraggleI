import React from "react";
import AuthLayout from "components/layouts/AuthLayout";
import Input from "components/atoms/Input/Input";
import { Form, ErrorMsg } from "./styles";
import Button from "components/atoms/Button/Button";
import { useFormik } from "formik";
import { resetSchema } from "Validation/Schema";
import Card from "components/atoms/Card/Card";

function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: resetSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <AuthLayout>
      <Form onSubmit={formik.handleSubmit}>
        <Card className="reset-card">
          <p className="reset-header"> Set up your Skraggle account </p>
          <div className="description">We will send a recovery link to</div>
          <Input
            change
            type="text"
            placeholder="john@example.com"
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
            type="text"
            id="password"
            name="password"
            placeholder="Create new password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          ) : null}
          <div className="regpassword__btn">
            <Button auth type="submit">
              Log in
            </Button>
          </div>
        </Card>
      </Form>
    </AuthLayout>
  );
}

export default ResetPassword;
