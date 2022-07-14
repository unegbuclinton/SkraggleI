import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Slider from 'components/atoms/Slider';
// import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Amount({
  textColorChange,
  textColor,
  backgroundColorChange,
  backgroundColor,
  borderSize,
  borderSizeChange,
  borderRadius,
  borderRadiusChange,
  borderColorChange,
  borderColor,
  showAmountShadowChange
}) {
  const [iconColor, setIconColor] = useState('#FFFFFF');

  return (
    <AmountWrapper>
      <AmountFieldWrapper>
        <AmountLabel>Text color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents type="color" value={textColor} onChange={textColorChange} />
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Background color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={backgroundColor}
              onChange={backgroundColorChange}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Icon color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={iconColor}
              onChange={(e) => setIconColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border size</AmountLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            min={0}
            max={6}
            onChange={borderSizeChange}
            value={borderSize}
          />
        </SliderWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border radius</AmountLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            onChange={borderRadiusChange}
            value={borderRadius}
          />
        </SliderWrapper>
      </AmountFieldWrapper>

      <AmountFieldWrapper>
        <AmountLabel>Border color</AmountLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents type="color" value={borderColor} onChange={borderColorChange} />
          </ColorContainer>
        </ColorContainerWrapper>
      </AmountFieldWrapper>
      <AmountFieldWrapper>
        <AmountLabel></AmountLabel>
        <Checkbox pink className="amount-checkbox" onChange={showAmountShadowChange} />
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
  margin-top: 3.2rem;
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
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
