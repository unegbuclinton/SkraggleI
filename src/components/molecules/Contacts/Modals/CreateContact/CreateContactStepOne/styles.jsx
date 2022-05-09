import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled(Card)`
  padding: 0 0 2.42rem 1.2rem;
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
    height: 6.4rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    padding-left: 2rem;
    background-color: ${COLORS.white};
    margin-bottom: 0;
  }
  .email-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    padding-top: 1rem;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  padding-top: 0.5rem;
`;

export const FormLabel = styled.label`
  padding: 2.4rem 0 0.5rem 0;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  .date-dropdown {
    width: 17.842rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    border-radius: 0.5rem;
    padding-top: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  margin: 5.3rem 1.5rem 0 0;
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
