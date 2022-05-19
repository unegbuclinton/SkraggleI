import Button from 'components/atoms/Button/Button';
import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailConfirmWrapper } from './styles';

function OTPConfirmation() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <AuthLayout>
      <EmailConfirmWrapper className="forgot-confirm">
        <h1 className="forgot-confirm__heading">Email confirmed</h1>
        <p className="forgot-confirm__description">
          Your verification is complete. Kick off your <br /> journey towards a rewarding career.{' '}
        </p>
        <Button type="submit" className="forgot-confirm__proceed" onClick={(e) => handleClick(e)}>
          Proceed to Dashboard
        </Button>
      </EmailConfirmWrapper>
    </AuthLayout>
  );
}

export default OTPConfirmation;
