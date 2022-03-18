import React from "react";

import AuthLayout from "components/layouts/AuthLayout";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import { FormWrapper, ReturnLoginLink } from "./styles";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <FormWrapper>
        <Card className="forgot-password__card">
          <h1 className="forgot-password__heading">Can’t log in?</h1>
          <p>We will send a recovery link to</p>
          <Input type="text" placeholder="Email"></Input>
          <Button recoverylink>Send Recovery Link</Button>
          <ReturnLoginLink to="/login">Return to login</ReturnLoginLink>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
};

export default ForgotPassword;
