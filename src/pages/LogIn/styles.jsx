import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 5rem;
  .login-card {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    padding-top: 3.439rem;
    padding-bottom: 4rem;

    .login-input {
      width: 37.52rem;
    }
    &__heading {
      display: flex;
      justify-content: center;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.xlarge};
      line-height: 2.3rem;
      color: ${COLORS['blue-black']};
      padding-top: 3.44rem;
      padding-bottom: 3.86rem;
    }

    &__signup-link {
      display: flex;
      gap: 0.8rem;
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: ${COLORS['gray-500']};
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
    }
  }

  .login-button {
    border-radius: 0.5rem;
    height: 6.4rem;
    font-size: ${FONTSIZES.small};
    line-height: 1.6rem;
    color: ${COLORS.white};
    margin-bottom: 2.8rem;
  }

  .google-button {
    border: 1px solid ${COLORS.offWhite};
    border-radius: 0.5rem;
    height: 6.4rem;
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-400']};
    background: ${COLORS.white};
    line-height: 1.875rem;
    margin-bottom: 5.6rem;
  }
  .forgot-password__container {
    display: flex;
    justify-content: right;
  }

  .divider-container {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 2.4rem;
    margin-bottom: 2rem;

    .divider-text {
      position: absolute;
      top: -0.8rem;
      font-size: ${FONTSIZES.small};
      color: ${COLORS.deepPurple};
    }
  }
`;

export const DividerLeft = styled.div`
  border-top: 0.115px solid ${COLORS.torquoise};
  flex: 1;
  margin-right: 2.4rem;
`;

export const DividerRight = styled.div`
  border-top: 0.115px solid ${COLORS.torquoise};
  flex: 1;
  margin-left: 2.4rem;
`;

export const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const LoginLink = styled(Link)`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  line-height: 1.6rem;
  text-decoration: none;
  display: flex;

  &.forgot-password {
    justify-content: right;
    margin-top: 0.8rem;
    margin-bottom: 5.6rem;
    color: #ff576b;
  }

  &.signup {
    color: #1e003e;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: -0.5rem;
`;
