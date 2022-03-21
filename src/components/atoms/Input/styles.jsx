import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";

export const InputField = styled.input`
  outline: none;
  border: none;
  width: 37.52rem;
  height: 6.4rem;
  border-radius: 5px;
  background-color: ${COLORS.offWhite};
  padding: 20px;
  margin-bottom: 16px;

  &[type="email"]:disabled {
    background-color: ${COLORS.torquoise};
   ::placeholder{
     opacity: .6;
   }
  }
`;

export const InputFieldIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const Container = styled.div`
  position: relative;
  width: 37.52rem;
`;
