import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const DropdownWrapper = styled.form`
  padding: 4.8rem 0 6.8rem 0;
  .normal-input {
    width: 61.4rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 3.2rem 0;
  }

  .max-character {
    width: 28.3rem;
    height: 6.4rem;
    background-color: ${COLORS.torquoise};
    border: 0.1rem solid ${COLORS.torquoise};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin: 0.8rem 0 3.2rem 0;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS["gray-500"]};
  }
`;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-200"]};
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  margin-bottom: 3.2rem;
  p {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS.black};
    width: 26.8rem;
  }
`;

export const FieldTypeWrapper = styled.div`
  display: flex;
  gap: 2.1rem;
  .field-type-dropdown {
    width: 28.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 3.2rem 0;
    padding-top: 2.2rem;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    .checkbox {
      height: 1.8rem;
      width: 1.8rem;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      color: ${COLORS.black};
      padding-bottom: 0.2rem;
    }
  }
`;

export const Container = styled.div`
  h2 {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.black};
  }

  .pack-container {
    width: 99.1rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 2.4rem 0 0 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 7.7rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.3rem;
    background-color: ${COLORS.white};
    color: ${COLORS["gray-500"]};
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
