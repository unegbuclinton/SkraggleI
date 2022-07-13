import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useElement } from 'context';
import React from 'react';
import styled from 'styled-components';

function Appearance() {
  // vars
  const {
    elementConfig,
    toggleElementBoxShadow,
    changeStyleAttribute,
    changeChildrenAttribute
  } = useElement();

  return (
    <AppearanceWrapper>
      <InputWrapper>
        <StickyButtonLabel>Label</StickyButtonLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Donate" value={elementConfig.children} onChange={changeChildrenAttribute} />
        </Wrapper>
      </InputWrapper>
      <SliderContainer>
        <SliderLabel>Button Height</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            value={parseFloat(elementConfig.style.height)}
            onChange={(e) => changeStyleAttribute('height', e)}
          />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Button Width</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            value={parseFloat(elementConfig.style.width)}
            onChange={(e) => changeStyleAttribute('width', e)}
          />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Label color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={elementConfig.style.color}
            onChange={(e) => changeStyleAttribute('color', e)}
          />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Button color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={elementConfig.style.backgroundColor}
            onChange={(e) => changeStyleAttribute('backgroundColor', e)}
          />
        </ColorContainer>
      </ColorWrapper>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            value={parseFloat(elementConfig.style.borderWidth)}
            onChange={(e) => changeStyleAttribute('borderWidth', e)}
          />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer className="border-radius">
        <SliderLabel className="border-label">Border radius</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            value={parseFloat(elementConfig.style.borderRadius)}
            onChange={(e) => changeStyleAttribute('borderRadius', e)}
          />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Border color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={elementConfig.style.borderColor}
            onChange={(e) => changeStyleAttribute('borderColor', e)}
          />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Icon color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={elementConfig.icon.color}
            onChange={(e) => changeStyleAttribute('color', e, 'icon')}
          />
        </ColorContainer>
      </ColorWrapper>
      <span onClick={toggleElementBoxShadow}>
        <CheckBoxWrapper className="checkbox">
          <Checkbox pink checked={elementConfig.style.boxShadow !== undefined} />
          <CheckBoxLabel>Show shadow</CheckBoxLabel>
        </CheckBoxWrapper>
      </span>
    </AppearanceWrapper>
  );
}

export default Appearance;

const AppearanceWrapper = styled.div`
  margin-top: 3.2rem;
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.6rem;
  }
  .border-radius {
    margin-left: 10.3rem;
  }
  .border-label {
    width: 15rem;
  }
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  padding-left: 16.6rem;
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  .color-label {
    padding-top: 1rem;
    width: 9.9rem;
  }
`;

const ColorWrapper = styled.div`
  padding-left: 11.2rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 1.8rem 0 0 22.8rem;
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

export const SliderLabel = styled.label`
  width: 12rem;
  position: relative;
  top: 0.2rem;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;

  .slider-border {
    padding: 0;
  }
  .slider-text {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.base};
    color: ${COLORS['grey-500']};
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  margin: 0 0 1.6rem 12rem;
  font-size: ${FONTSIZES.small};
`;
