import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 5.887rem;
  .otp-card {
    padding: 2.2rem 4.5rem 11.1rem 4.5rem;

    &__heading {
      display: flex;
      justify-content: center;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.lg};
      color: ${COLORS.deepPurple};
    }

    &__description {
      display: flex;
      justify-content: center;
      text-align-last: center;
      margin-top: 1.3rem;
      height: 3.8rem;
      font-size: ${FONTSIZES.small};
      line-height: 19px;
      color: ${COLORS.deepPurple};
    }
    &__verify-button {
      justify-content: center;
      width: 37.52rem;
      height: 6.4rem;
      margin-top: 1.6rem;
      border-radius: 0.5rem;
    }
    &__resend-link {
      display: flex;
      gap: 0.8rem;
      margin-top: 1.6rem;
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
    }
  }
`;
export const OTPBoxWrapper = styled.div`
  display: flex;
  margin-top: 8.8rem;
`;
export const OTPBox = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  width: 5.4rem;
  height: 4.9rem;
  margin-right: 1rem;
  text-align: center;
`;

export const ResendLink = styled.a`
  color: blue;
`;
