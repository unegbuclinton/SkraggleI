import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  padding: 3rem 2.1rem 2.4rem 2.1rem;
`;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const RadioWrapper = styled.div`
  margin: 2.3rem 0 3.678rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.822rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
  .normal-input {
    width: 50.2rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 1rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
  .discount-input {
    width: 28.3rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 1rem 0;
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

  .maxuser-date-input {
    width: 24.3rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 1rem 0;
  }

  .max-label {
    width: 28.3rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['grey-200']};
    line-height: 2rem;
    margin-bottom: 3.2rem;
  }
`;

export const SelectContainer = styled.div`
  margin-top: 4rem;
  h2 {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.black};
  }
  .select-box {
    background-color: ${COLORS.white};
    margin: 2.4rem 0 0 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 9.5rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
  }

  .save-btn {
    width: 20.3rem;
    height: 5.1rem;
    border-radius: 0.3rem;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-bottom: 0.8rem;
`;
