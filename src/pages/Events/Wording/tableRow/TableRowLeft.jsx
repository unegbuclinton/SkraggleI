import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React from "react";
import styled from "styled-components";

function TableRowLeft({ leftText }) {
  return <TextWrapper>{leftText}</TextWrapper>;
}

export default TableRowLeft;

const TextWrapper = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS["grey-500"]};
`;
