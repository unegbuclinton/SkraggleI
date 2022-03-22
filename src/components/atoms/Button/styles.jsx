import { COLORS } from "constants/colors";
import { FONTWEIGHTS, FONTSIZES } from "constants/font-spec";
import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  cursor: pointer;
  width: 100%;
  padding: ${({ large }) => (large ? "1.6rem 0" : "1.1rem 0")};
  border-radius: ${({ pill }) => (pill ? "4rem" : "")};

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 4rem;
      padding: 0.65rem 0;
    `};
  ${({ action }) =>
    action &&
    css`
      padding: 1.1rem 2.7rem;
      border-radius: 3.6304px;
      width: 12.4rem;
    `};
<<<<<<< HEAD

=======
>>>>>>> dd1a134a40798b39d700ad05ff3ce48d91b2399b
  ${({ auth }) =>
    auth &&
    css`
      border-radius: 0.5rem;
      height: 6.4rem;
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: ${COLORS.white};
<<<<<<< HEAD
      margin-bottom: 5.6rem;
    `};

  
=======
    `};
>>>>>>> dd1a134a40798b39d700ad05ff3ce48d91b2399b
`;
