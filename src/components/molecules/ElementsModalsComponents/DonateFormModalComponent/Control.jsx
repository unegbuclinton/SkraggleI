import ColorComponents from 'components/atoms/ColorComponent';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Controls() {
  const [borderColor, setBorderColor] = useState('#1E003E');
  return (
    <ControlsWrapper>
      <ControlsFieldWrapper>
        <ControlsLabel>Border size</ControlsLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </ControlsFieldWrapper>

      <ControlsFieldWrapper>
        <ControlsLabel>Border radius</ControlsLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </ControlsFieldWrapper>

      <ControlsFieldWrapper>
        <ControlsLabel>Border color</ControlsLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ControlsFieldWrapper>
    </ControlsWrapper>
  );
}

export default Controls;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ControlsFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
`;

const ControlsLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

const ColorContainerWrapper = styled.div`
  width: 100%;
  .border-color {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
  }
  .border-color::-webkit-color-swatch {
    border-radius: 50%;
    border: 1px solid #e6eff1;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1rem;
  justify-content: center;
  width: 13.4rem;
  height: 6.4rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 5px;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;
export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
