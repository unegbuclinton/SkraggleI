import React from "react";

import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import { LoginWrapper, FormWrapper, LoginLink } from "./styles";

const LogIn = () => {
  return (
    <AuthLayout>
      <LoginWrapper>
        <FormWrapper>
          <h1 className="login-heading">Log In</h1>
          <Input type="text" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <LoginLink className="link__forgotpassword" to={"/forgot-password"}>
            Forgot Password?
          </LoginLink>
          <Button auth>LOG IN</Button>
          <label>
            Don’t have any account?
            <LoginLink className="link__signup" to="/sign-up"> Sign Up</LoginLink>
          </label>
        </FormWrapper>
      </LoginWrapper>
    </AuthLayout>
  );
};

export default LogIn;
