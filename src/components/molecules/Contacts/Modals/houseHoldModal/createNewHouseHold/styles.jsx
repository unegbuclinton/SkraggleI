import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled(Card)`
  padding-bottom: 2.42rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  .input-field {
    width: 60.2rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['gray-500']};
    padding-left: 2rem;
    background-color: ${COLORS.white};
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: -0.5rem;
`;

export const FormLabel = styled.label`
  padding: 2.4rem 0 0.5rem 0;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const ButtonContainer = styled.div`
  margin-top: 25rem;
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  .cancel {
    width: 14rem;
    height: 4.8rem;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    color: ${COLORS['tabel-btn-grey']};
  }

  .continue {
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
  }
`;
