import AuthLayout from 'components/layouts/AuthLayout';
import { resendVerification } from 'features/auth/authSlice';
import { DPIconEmail } from 'icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { VerificationWrapper } from './styles';
function SendVerification() {
  const location = useLocation();
  const email = location.state;
  const dispatch = useDispatch();
  console.log(email);
  return (
    <AuthLayout>
      <VerificationWrapper>
        <div className="send-verification">
          <h1 className="send-verification__heading">Check your inbox to verify your account</h1>
          <div className="send-verification__image-wrapper">
            <DPIconEmail className="send-verification__image-wrapper--image" />
          </div>
          <p className="send-verification__info">
            To complete the sign up and log in, click the verification link in the email we have
            sent to
          </p>
          <div className="send-verification__email">{email}</div>
          <p
            className="send-verification__link"
            onClick={() => dispatch(resendVerification({ email }))}>
            Resend verification email
          </p>
        </div>
      </VerificationWrapper>
    </AuthLayout>
  );
}
export default SendVerification;
