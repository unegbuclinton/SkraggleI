import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  outline: none;
  width: 14.4rem;
  height: 4.8rem;
  border: 1px solid #e2e6ff;
  box-sizing: border-box;
  padding: ${({ large }) => (large ? "1.6rem 0" : "1.1rem 1.6rem")};
`;

export const SelectWrapper = styled.select`
  outline: none;
  font-style: normal;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-400"]};
  line-height: 16px;
  border: none;
  width: 12rem;
  height: 2.4rem;
`;
