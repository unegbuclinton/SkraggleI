import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Appearance() {
  const [white, setWhite] = useState('#FFFFFF');
  const [blue, setBlue] = useState('#477BE0');
  const [whitez, setWhitez] = useState('#FFFFFF');
  const [black, setBlack] = useState('#000000');

  return (
    <AppearanceWrapper>
      <InputWrapper>
        <StickyButtonLabel>Label</StickyButtonLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Donate" />
        </Wrapper>
      </InputWrapper>
      <SliderContainer>
        <SliderLabel>Button size</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Label color</StickyButtonLabel>
          <ColorComponents type="color" value={white} onChange={(e) => setWhite(e.target.value)} />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Button color</StickyButtonLabel>
          <ColorComponents type="color" value={blue} onChange={(e) => setBlue(e.target.value)} />
        </ColorContainer>
      </ColorWrapper>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer className="border-radius">
        <SliderLabel className="border-label">Border radius</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Border color</StickyButtonLabel>
          <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Icon color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={whitez}
            onChange={(e) => setWhitez(e.target.value)}
          />
        </ColorContainer>
      </ColorWrapper>
      <CheckBoxWrapper className="checkbox">
        <Checkbox pink />
        <CheckBoxLabel>Show shadow</CheckBoxLabel>
      </CheckBoxWrapper>
    </AppearanceWrapper>
  );
}

export default Appearance;

const AppearanceWrapper = styled.div`
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
