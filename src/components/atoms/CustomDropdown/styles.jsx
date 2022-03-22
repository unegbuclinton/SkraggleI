import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const DropdownWrapper = styled.select`
  outline: none;
  width: 14.4rem;
  height: 4.8rem;
  border: 1px solid #e2e6ff;
  box-sizing: border-box;
  margin-left: 1.6rem;
  /* remove the margin top from here */
  padding: ${({ large }) => (large ? "1.6rem 0" : "1.1rem 1.6rem")};
  color: ${COLORS["grey-400"]};
  font-style: normal;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  line-height: 16px;
`;
