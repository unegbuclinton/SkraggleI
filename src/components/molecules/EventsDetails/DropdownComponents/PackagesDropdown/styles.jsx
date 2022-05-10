import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DropDownWrapper = styled.form`
  padding: 4.8rem 0 8rem 0;
  .name-input {
    width: 61.4rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2.4rem 0;
  }

  .text-editor {
    width: 61.4rem;
    height: 30.6rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    margin-top: 0.8rem;
  }

  .maplink-container {
    margin-bottom: 7.1rem;
  }

  .money-input {
    width: 34.9rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 0 0;
    padding-left: 1rem;
  }

  .radio {
    width: 1.5rem;
    height: 1.5rem;
    color: ${COLORS.pink};
  }

  .discount-input {
    width: 28.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-top: 0.8rem;
  }

  .date-time-input {
    width: 24.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 0 0;
  }

  .multiple-package-wrapper {
    margin-top: 4rem;
  }

  .normal-input {
    width: 28.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 0 0;
  }

  .unlimited-container {
    width: 24.3rem;
    height: 6.4rem;
    background-color: ${COLORS.torquoise};
    border: 0.1rem solid ${COLORS.torquoise};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.8rem;
    p {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS['gray-500']};
    }
  }
`;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const SwitchLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  margin-top: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  .input-container {
    margin-top: 3rem;
  }
  .qty-container {
    margin-top: 6.9rem;
  }

  .error-container {
    margin-top: 2.4rem;
  }

  .price-error {
    margin-top: 1rem;
  }

  .custom-container {
    margin-top: 4.1rem;
    .custom-label {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.lg};
      color: ${COLORS.black};
    }
    .email-container {
      height: 6.4rem;
      width: 99.1rem;
      border: 0.1rem solid ${COLORS['gray-500']};
      border-radius: 0.5rem;
      background-color: ${COLORS.white};
      margin-top: 0.8rem;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const RadioWrapper = styled.div`
  margin: 3.3rem 0 3.378rem 7.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.822rem;
`;

export const GenericText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
  margin-top: 1.6rem;
  width: 28.3rem;
  line-height: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 7.7rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
    background-color: ${COLORS.white};
    color: ${COLORS['gray-500']};
  }

  .save-btn {
    width: 20.3rem;
    height: 5.1rem;
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
    border-radius: 0.3rem;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  position: relative;
  bottom: 1.5rem;
`;
