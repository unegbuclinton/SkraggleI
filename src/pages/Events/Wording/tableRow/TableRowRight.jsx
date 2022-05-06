import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function TableRowRight({ rightText, setClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    setClick(true);
  };
  return <TextWrapper onClick={handleClick}>{rightText}</TextWrapper>;
}

export default TableRowRight;

const TextWrapper = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['gray-500']};
`;
