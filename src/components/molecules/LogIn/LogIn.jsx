import React from "react";

import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import { FormWrapper, LoginLink } from "./styles";

const LogIn = () => {
  return (
    <AuthLayout>
      <FormWrapper>
        <Card className="login-card">
          <h1 className="login-heading">Log In</h1>
          <Input type="text" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <LoginLink className="forgot-password" to={"/forgotpassword"}>
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
