import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Slider from 'components/atoms/Slider';
// import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Appearance() {
  const [white, setWhite] = useState('#FFFFFF');
  const [blue, setBlue] = useState('#477BE0');
  const [grey, setGrey] = useState('#DEDFE3');
  const [black, setBlack] = useState('#000000');

  return (
    <DonateAppearanceWrapper>
      <ColorsWrapper>
        <WrapperColor>
          <ColorLabel>Accent color</ColorLabel>
          <ColorComponents type="color" value={blue} onChange={(e) => setBlue(e.target.value)} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Text color</ColorLabel>
          <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Background color</ColorLabel>
          <ColorComponents type="color" value={white} onChange={(e) => setWhite(e.target.value)} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Border color</ColorLabel>
          <ColorComponents type="color" value={grey} onChange={(e) => setGrey(e.target.value)} />
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
      <CheckboxContainer>
        <Checkbox pink />
        <CheckboxLabel>Show shadow</CheckboxLabel>
      </CheckboxContainer>
    </DonateAppearanceWrapper>
  );
}

export default Appearance;

const DonateAppearanceWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
`;

const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const ColorLabel = styled.p`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
  cursor: default;
  padding-bottom: 0.8rem;
`;

const CheckboxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  margin: 0.2rem 0 2.6rem 0;
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
