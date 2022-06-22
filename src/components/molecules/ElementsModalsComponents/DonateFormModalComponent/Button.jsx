import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Buttons() {
  return (
    <ButtonWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel>Label</ButtonLabel>
        <Input className="button-input" placeholder="Doante and support" />
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Label color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#477BE0" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Button color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#FFFFFF" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border size</ButtonLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border radius</ButtonLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#1E003E" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel></ButtonLabel>
        <Checkbox pink className="button-checkbox" />
        Show Shadow
      </ButtonFieldWrapper>
    </ButtonWrapper>
  );
}

export default Buttons;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .button-checkbox {
    margin-left: -2rem;
  }

  .button-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
`;

export const ButtonLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
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

export const ColorCircle = styled.div`
  width: 23.22px;
  height: 23.22px;
  border-radius: 50%;
  background-color: #477be0;
  border: 1px solid #e6eff1;
`;
export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
