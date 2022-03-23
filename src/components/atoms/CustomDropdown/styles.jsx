import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 14.4rem;
  height: 4.8rem;
  border: 1px solid #e2e6ff;
`;

export const DropdownSelect = styled.select`
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  width: 13rem;
  border: none;
  outline: none;
  color: ${COLORS["grey-400"]};
  font-size: ${FONTSIZES.small};
  line-height: 1.6rem;
  border-radius: 0px;
  box-shadow: none;

  &::after {
    width: 14rem;
    background-color: red;
  }
`;
