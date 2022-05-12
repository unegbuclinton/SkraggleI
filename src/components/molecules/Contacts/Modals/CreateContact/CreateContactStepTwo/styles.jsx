import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled(Card)`
  padding: 2.42rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  .dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    /* padding: 0 2rem 0 2rem; */
  }
  .form-input {
    width: 60.2rem;
    height: 6.4rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['tabel-btn-grey']};
    padding: 0 2.83rem 0 2.83rem;
    margin-bottom: 1.606rem;
    background-color: ${COLORS.white};
  }
`;

export const FormLabel = styled.label`
  padding: 2.4rem 0 0.5rem 0;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const AddressContainer = styled.div`
  display: flex !important;
  gap: 1.6rem;
`;

export const AddressInput = styled.input`
  width: 17.842rem !important;
  height: 6.4rem;
  border: 0.1rem solid ${COLORS['tabel-btn-grey']};
  border-radius: 0.5rem;
  margin-bottom: 1.606rem;
  padding: 0 2.83rem 0 2.83rem;
  outline: none;
`;

export const ButtonContainer = styled.div`
  margin-top: 5.3rem;
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

export const ErrorMsg = styled.p`
  color: red;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  /* padding-top: 0.5rem; */
  position: relative;
  bottom: 1rem;
`;
