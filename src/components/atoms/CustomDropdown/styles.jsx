import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 14.4rem;
  height: 4.8rem;
  border: 1px solid #e2e6ff;
`;

export const DropdownSelect = styled.select`
  width: 12rem;
  border: none;
  outline: none;
  color: ${COLORS["grey-400"]};
  font-size: ${FONTSIZES.small};
  line-height: 1.6rem;
  border-radius: 0px;
  box-shadow: none;

  option {
    border: 2px solid red !important;
  }
`;
