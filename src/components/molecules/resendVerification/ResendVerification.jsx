import React from "react";
import { ResendLinkWrapper } from "./styles";
import { DPIconEmail } from "icons";
import AuthLayout from "components/layouts/AuthLayout";

function ResendVerification() {
  return (
    <AuthLayout>
      <ResendLinkWrapper>
        <div className="resend-verification">
          <h1 className="resend-verification__heading">
            Check your inbox to reset your password
          </h1>
          <div className="resend-verification__image-wrapper">
            <DPIconEmail className="resend-verification__image-wrapper--image" />
          </div>
          <p className="resend-verification__info">
            We sent a recovery link to you at
          </p>

          <div className="resend-verification__email">john@example.com</div>

          <p className="resend-verification__link">Resend verification email</p>
        </div>
      </ResendLinkWrapper>
    </AuthLayout>
  );
}

export default ResendVerification;
