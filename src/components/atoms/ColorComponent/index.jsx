import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function ColorComponents({ onChange, type, value }) {
  return (
    <ColorWrapper>
      <input className="color" type={type} value={value} onChange={onChange} />
      <ColorCode>{value}</ColorCode>
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
  input[type='color'] {
    width: 2.322rem;
    height: 2.322rem;
    border-radius: 50%;
    overflow: hidden;
    border: 0.1rem solid ${COLORS.torquoise};
  }

  input[type='color']::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    padding: 0;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 50%;
    padding: 0;
  }
`;

const ColorCode = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
  text-transform: uppercase;
`;
