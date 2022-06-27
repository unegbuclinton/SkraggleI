import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
// import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function SocialProofButton() {
  const [white, setWhite] = useState('#FFFFFF');
  const [blue, setBlue] = useState('#477BE0');
  const [blu, setBlu] = useState('#477BE0');

  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input type="text" className="input-field" placeholder="Donate" />
      <ColorsWrapper>
        <WrapperColor>
          <ColorLabel>Text color</ColorLabel>
          <ColorComponents type="color" value={blue} onChange={(e) => setBlue(e.target.value)} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Background color</ColorLabel>
          <ColorComponents type="color" value={white} onChange={(e) => setWhite(e.target.value)} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Border color</ColorLabel>
          <ColorComponents type="color" value={blu} onChange={(e) => setBlu(e.target.value)} />
        </WrapperColor>
      </ColorsWrapper>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Button radius</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
    </DonateAppearanceWrapper>
  );
}

export default SocialProofButton;

const DonateAppearanceWrapper = styled.div`
  padding: 3.2rem 2.4rem 0 2.4rem;
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
`;

const DonateAppearanceLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  margin-bottom: 0.8rem;
  cursor: default;
`;

const ColorsWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`;

const ColorLabel = styled.p`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
  cursor: default;
  padding-bottom: 0.8rem;
`;

export const SliderLabel = styled.label`
  width: 11rem;
  position: relative;
  top: 0.5rem;
  font-size: ${FONTSIZES.small};
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

const WrapperColor = styled.div``;

export const SliderContainer = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
`;
