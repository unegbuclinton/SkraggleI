import Checkbox from 'components/atoms/CheckBox';
import Slider from 'components/atoms/Slider';
// import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Amount() {
  return (
    <AmountWrapper>
      <AmountFieldWrapper>
        <AmountLabel>Text color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#477BE0" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Background color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#FFFFFF" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Icon color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#FFFFFF" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border size</AmountLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border radius</AmountLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#1E003E" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>
      <AmountFieldWrapper>
        <AmountLabel></AmountLabel>
        <Checkbox pink className="amount-checkbox" />
        Show shadow
      </AmountFieldWrapper>
    </AmountWrapper>
  );
}

export default Amount;

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AmountFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .amount-checkbox {
    margin-left: -4rem;
  }
  .color-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
  }
  .color-input::-webkit-color-swatch {
    border-radius: 50%;
    border: 1px solid #e6eff1;
  }
`;

export const AmountLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
`;

export const ColorContainer = styled.div`
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
