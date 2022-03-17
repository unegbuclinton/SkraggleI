import React from "react";

import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import { LoginWrapper, ForgotPasswordLink, SignupLink } from "./styles";

const LogIn = () => {
  return (
    <AuthLayout>
      <LoginWrapper>
        <form>
          <h1 className="login-heading">Log In</h1>
          <Input type="text" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <ForgotPasswordLink to={"/forgot-password"}>
            Forgot Password?
          </ForgotPasswordLink>
          <Button auth>LOG IN</Button>
          <label>
            Don’t have any account?
            <SignupLink to="/sign-up"> Sign Up</SignupLink>
          </label>
        </form>
      </LoginWrapper>
    </AuthLayout>
  );
};

export default LogIn;
