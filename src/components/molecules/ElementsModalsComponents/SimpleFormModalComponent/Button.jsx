import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Buttons({
  buttonLabelChange,
  labelColorChange,
  labelColor,
  buttonColorChange,
  buttonColor,
  buttonBorder,
  buttonBorderChange,
  buttonRadius,
  buttonRadiusChange,
  buttonBorderColorChange,
  buttonBorderColor,
  showButtonShadowChange
}) {
  return (
    <ButtonWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel>Label</ButtonLabel>
        <Input
          className="button-input"
          placeholder="Doante and support"
          onChange={buttonLabelChange}
        />
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Label color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents type="color" value={labelColor} onChange={labelColorChange} />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Button color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents type="color" value={buttonColor} onChange={buttonColorChange} />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border size</ButtonLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            min={0}
            max={6}
            onChange={buttonBorderChange}
            value={buttonBorder}
          />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border radius</ButtonLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            onChange={buttonRadiusChange}
            value={buttonRadius}
          />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={buttonBorderColor}
              onChange={buttonBorderColorChange}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel></ButtonLabel>
        <Checkbox pink className="button-checkbox" onChange={showButtonShadowChange} />
        Show Shadow
      </ButtonFieldWrapper>
    </ButtonWrapper>
  );
}

export default Buttons;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const ButtonFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .button-checkbox {
    margin-left: -4rem;
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
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1rem;
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
