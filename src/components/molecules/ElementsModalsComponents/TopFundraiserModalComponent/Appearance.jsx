import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Appearance() {
  const [textColor, setTextColor] = useState('#477BE0');
  const [accentTextColor, setAccentTextColor] = useState('#FFFFFF');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [borderColor, setBorderColor] = useState('#1E003E');

  return (
    <AppearanceWrapper>
      <AppearanceFieldWrapper>
        <AppearanceLabel>Title</AppearanceLabel>
        <Input className="behavior-input" placeholder="Top Fundraiser" />
      </AppearanceFieldWrapper>

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
        <AppearanceLabel>Border Size</AppearanceLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </AppearanceFieldWrapper>
      <AppearanceFieldWrapper>
        <AppearanceLabel>Border Radius</AppearanceLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
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
    </AppearanceWrapper>
  );
}

export default Appearance;

export const AppearanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AppearanceFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .input-wrapper {
    display: flex;
  }
  .behavior-dropdown {
    max-width: 30.6rem;
  }
  .behavior-checkbox {
    margin-left: -2rem;
  }

  .behavior-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .campaign-input {
    max-width: 30.6rem;
    background: ${COLORS.torquoise};
    border: 1px solid ${COLORS['gray-500']};
  }
  .behavior-goal__input {
    width: 21rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .behavior-amount__input {
    width: 16rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
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

export const AppearanceLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const BehaviorCampaignInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
