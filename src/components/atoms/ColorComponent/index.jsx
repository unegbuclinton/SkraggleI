import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function ColorComponents({ colorCode, style }) {
  return (
    <ColorWrapper>
      <Color style={style}></Color>
      <ColorCode>{colorCode}</ColorCode>
    </ColorWrapper>
  );
}

export default ColorComponents;

const ColorWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 13.4rem;
  height: 6.4rem;
  border: 0.1rem solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
  justify-content: center;
`;

const Color = styled.div`
  width: 2.322rem;
  height: 2.322rem;
  border-radius: 100%;
  border: 0.1rem solid ${COLORS.torquoise};
`;

const ColorCode = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;
