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

export const FormContainer = styled.form`
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

export const ButtonContainer = styled.div`
  margin-top: 11.5rem;
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

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${COLORS["grey-600"]};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${COLORS.pink};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;

  .title {
    color: ${COLORS["header-grey"]};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }

  .info {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["grey-200"]};
    margin-top: 1rem;
  }
`;

export const TagWrapper = styled.div``;
