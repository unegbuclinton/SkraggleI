import React from "react";
import AuthLayout from "components/layouts/AuthLayout";
import Input from "components/atoms/Input/Input";
import { Form, ResetWrapper } from "./styles";
import Button from "components/atoms/Button/Button";

function ResetPassword() {
  return (
    <AuthLayout>
      <ResetWrapper>
        <p className="reset-header"> Set up your Skraggle account </p>
        <div className="description">We will send a recovery link to</div>
        <Form>
          <Input change type="text" placeholder="john@example.com" />
          <Input type="text" placeholder="Create New Password" />
          <div className="regpassword__btn">
            <Button auth>Log in</Button>
          </div>
        </Form>
      </ResetWrapper>
    </AuthLayout>
  );
}

export default ResetPassword;
