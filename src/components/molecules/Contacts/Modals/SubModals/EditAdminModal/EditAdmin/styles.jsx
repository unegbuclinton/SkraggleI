import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem 0 3.9rem 0;
  .input {
    width: 29.3rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin-bottom: 0;
  }
  .select {
    width: 29.3rem;
  }
`;

export const ModalForm = styled.form``;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
  position: relative;
  bottom: 0.8rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const SelectContainer = styled.div`
  margin-top: 1.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 4rem;
  gap: 1.6rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }
  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 0.5rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: 0.8rem;
`;
