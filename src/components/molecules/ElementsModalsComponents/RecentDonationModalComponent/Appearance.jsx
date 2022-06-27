import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Appearance() {
  const [textColor, setTextColor] = useState('#1E003E');
  const [accentTextColor, setAccentTextColor] = useState('#477BE0');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [borderColor, setBorderColor] = useState('#DEDFE3');

  return (
    <AppearanceWrapper>
      <AppearanceFieldWrapper>
        <AppearanceLabel>Title</AppearanceLabel>
        <Input className="appearance-input" placeholder="Recent Donations" />
      </AppearanceFieldWrapper>

      <ColorPickersWrapper>
        <AppearanceFieldWrapper>
          <AppearanceLabel>Text color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>

        <AppearanceFieldWrapper>
          <AppearanceLabel>Accent text color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={accentTextColor}
                onChange={(e) => setAccentTextColor(e.target.value)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>

        <AppearanceFieldWrapper>
          <AppearanceLabel>Background color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>

        <AppearanceFieldWrapper>
          <AppearanceLabel>Border color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>
      </ColorPickersWrapper>

      <AppearanceFieldWrapper>
        <SliderContainer>
          <AppearanceLabel>Border Size</AppearanceLabel>
          <SliderWrapper>
            <Slider className="slider-border" text="px" />
          </SliderWrapper>
        </SliderContainer>
      </AppearanceFieldWrapper>

      <AppearanceFieldWrapper>
        <SliderContainer>
          <AppearanceLabel>Border Radius</AppearanceLabel>
          <SliderWrapper>
            <Slider className="slider-border" text="px" />
          </SliderWrapper>
        </SliderContainer>
      </AppearanceFieldWrapper>

      <AppearanceFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Show shadow" />
      </AppearanceFieldWrapper>

      <AppearanceFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Show shadow" />
      </AppearanceFieldWrapper>
    </AppearanceWrapper>
  );
}

export default Appearance;

export const AppearanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
`;

export const AppearanceFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
  gap: 0.8rem;

  .appearance-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }
`;

export const AppearanceLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex: 0 auto;
  width: 100%;
  gap: 0.8rem;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex: 0.7;

  .slider-border {
    padding: 0;
  }
`;

export const ColorPickersWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;
