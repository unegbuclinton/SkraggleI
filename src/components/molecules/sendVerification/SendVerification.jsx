import React from "react";
import { VerificationWrapper } from "./styles";
import { DPIconEmail } from "icons";
import AuthLayout from "components/layouts/AuthLayout";

function SendVerification() {
  return (
    <AuthLayout>
      <VerificationWrapper>
        <div className="send-verification">
          <h1 className="send-verification__heading">
            Check your inbox to verify your account
          </h1>
          <div className="send-verification__image-wrapper">
            <DPIconEmail className="send-verification__image-wrapper--image" />
          </div>
          <p className="send-verification__info">
            To complete the sign up and log in, click the verification link in
            the email we have sent to
          </p>

          <div className="send-verification__email">john@example.com</div>

          <p className="send-verification__link">Resend verification email</p>
        </div>
      </VerificationWrapper>
    </AuthLayout>
  );
}

export default SendVerification;
