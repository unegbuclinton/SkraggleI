import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import AuthLayout from 'components/layouts/AuthLayout';
import { confirmforgotPassword, forgotPassword } from 'features/auth/authSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormWrapper, OTPBox, OTPBoxWrapper, ResendLink } from './styles';

function OTP() {
  const [otp, setOtp] = useState(new Array(6)?.fill(''));
  const location = useLocation();
  const email = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      token: otp.join('')
    };
    dispatch(confirmforgotPassword(body)).then((data) => {
      if (data.payload) {
        toast('OTP Successful.');
        navigate('/password-confirm');
      }
    });
  };

  const handleClick = () => {
    dispatch(forgotPassword(email));
  };
  return (
    <AuthLayout>
      <FormWrapper>
        <Card className="otp-card">
          <h1 className="otp-card__heading">Enter time-based OTP</h1>
          <p className="otp-card__description">
            A time-based one -time password has been sent to <br />
            {email}
          </p>
          <OTPBoxWrapper>
            {otp.map((data, index) => (
              <OTPBox
                key={index}
                id="otp"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </OTPBoxWrapper>
          <Button
            type="submit"
            className="otp-card__verify-button"
            onClick={(e) => handleSubmit(e)}>
            Verify
          </Button>
          <p className="otp-card__resend-link">
            <span>Didn’t get OTP? </span>
            <ResendLink className="resend" onClick={(e) => handleClick(e)}>
              Resend
            </ResendLink>
          </p>
        </Card>
      </FormWrapper>
    </AuthLayout>
  );
}

export default OTP;
