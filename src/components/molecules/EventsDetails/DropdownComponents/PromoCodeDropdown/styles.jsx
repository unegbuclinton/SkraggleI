import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const DropdownWrapper = styled.form`
  padding: 2.9rem 0 3.5rem 0;
`;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-200"]};
`;

export const RadioWrapper = styled.div`
  margin: 3.3rem 0 1.556rem 0;
  .radio-container {
    display: flex;
    gap: 1.2rem;
    .radio {
      width: 1.5rem;
      height: 1.5rem;
      color: ${COLORS.pink};
      margin-bottom: 1.822rem;
    }

    p {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      color: ${COLORS.black};
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4.6rem;
  .normal-input {
    width: 50.2rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
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
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 1rem 0;
  }

  .maxuser-date-input {
    width: 24.3rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 1rem 0;
  }

  .max-label {
    width: 28.3rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS["grey-200"]};
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
    width: 99.1rem;
    height: 6.4rem;
    border: 0.1rem solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 2.4rem 0 0 0;
    /* display: flex;
    align-items: center;
    padding-left: 1rem; */
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
