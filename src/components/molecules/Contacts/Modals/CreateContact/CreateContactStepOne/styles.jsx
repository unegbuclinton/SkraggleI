import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const ModalWrapper = styled(Card)`
  padding-bottom: 2.42rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  .email-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS["tabel-btn-grey"]};
    padding: 0 2rem 0 2rem;
  }
`;

export const FormLabel = styled.label`
  padding: 2.4rem 0 0.5rem 0;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-200"]};
`;

export const FormInput = styled.input`
  width: 60.2rem;
  height: 6.4rem;
  border-radius: 0.5rem;
  outline: none;
  border: 0.1rem solid ${COLORS["tabel-btn-grey"]};
  padding-left: 2rem;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  .date-dropdown {
    width: 17.842rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["tabel-btn-grey"]};
    border-radius: 0.5rem;
    padding: 0 2rem 0 2rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 5.3rem;
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  .cancel {
    width: 14rem;
    height: 4.8rem;
    border: 0.1rem solid ${COLORS["tabel-btn-grey"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    color: ${COLORS["tabel-btn-grey"]};
  }

  .continue {
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
  }
`;
