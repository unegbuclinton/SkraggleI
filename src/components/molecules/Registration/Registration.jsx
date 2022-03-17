import React from "react";
import { Form, SignupWrapper } from "./styles";
import Input from "components/atoms/Input/Input";
import AuthLayout from "components/layouts/AuthLayout";
import Button from "components/atoms/Button/Button";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <AuthLayout>
      <SignupWrapper>
        <p className="signup-header"> Sign up</p>
        <Form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat Password" />
          <div className="reg__btn">
            <Button auth>Sign up</Button>
          </div>
        </Form>
        <div className="promp-text">
          <p> Have any account? </p>
          <span>
            <Link className="promp-text__path" to="/login">
              {" "}
              Log In
            </Link>
          </span>
        </div>
        <div className="agreement-container">
          By signing up, I accept the Skraggle
          <Link className="agreement-container__terms" to="/">
            Terms of Service
          </Link>{" "}
          and the
          <Link className="agreement-container__terms" to="/">
            {" "}
            Privacy Policy.
          </Link>
        </div>
      </SignupWrapper>
    </AuthLayout>
  );
}

export default Registration;
