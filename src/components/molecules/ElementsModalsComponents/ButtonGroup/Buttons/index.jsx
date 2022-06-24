import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function GroupButton() {
  const [black, setBlack] = useState('#212830');

  return (
    <AppearanceWrapper>
      <SliderContainer>
        <SliderLabel>Button size</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <InputWrapper>
        <StickyButtonLabel>Label color</StickyButtonLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Donate" />
        </Wrapper>
      </InputWrapper>
      <ColorWrapper>
        <ColorContainer>
          <MessageLabel className="border-color">Button color</MessageLabel>
          <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
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
    </AppearanceWrapper>
  );
}

export default GroupButton;

const AppearanceWrapper = styled.div`
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.7rem;
  }
  .checkbox {
    margin: 0 0 3.9rem 22.5rem;
  }

  .title {
    padding-left: 7.2rem;
  }
  .border-radius {
    margin-left: 11rem;
  }
  .border-label {
    width: 15rem;
  }
  .border-color {
    /* width: 9.9rem; */
    margin-left: 12.6rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const MessageLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  white-space: nowrap;
`;

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.5rem;
  .color-label {
    padding-top: 1rem;
    width: 8rem;
    margin-left: 13rem;
  }
  .background-label {
    width: 14.1rem;
    margin-left: 6.9rem;
  }
`;

const ColorWrapper = styled.div``;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  margin-left: 13.5rem;
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
