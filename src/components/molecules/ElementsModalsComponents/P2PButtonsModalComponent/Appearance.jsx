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
  // const [textColor, setTextColor] = useState('#1E003E');
  // const [accentTextColor, setAccentTextColor] = useState('#477BE0');
  // const [borderColor, setBorderColor] = useState('#FFFFFF');

  const { elementConfig, changeStyleAttribute, changeChildrenAttribute } = useElement();

  return (
    <AppearanceWrapper>
      <AppearanceFieldWrapper>
        <AppearanceLabel>Label</AppearanceLabel>
        <Input
          type="text"
          className="appearance-input"
          placeholder="Recent Donations"
          onChange={changeChildrenAttribute}
        />
      </AppearanceFieldWrapper>

      <AppearanceFieldWrapper>
        <SliderContainer>
          <SliderLabel>Button Height</SliderLabel>
          <SliderWrapper>
            <Slider
              className="slider-border"
              sliderText="slider-text"
              text="px"
              onChange={(e) => changeStyleAttribute('height', e)}
              value={parseFloat(elementConfig.style.height)}
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
              onChange={(e) => changeStyleAttribute('width', e)}
              value={parseFloat(elementConfig.style.width)}
            />
          </SliderWrapper>
        </SliderContainer>
        {/* <SliderContainer>
          <AppearanceLabel>Button Size</AppearanceLabel>
          <SliderWrapper>
            <Slider className="slider-border" text="px" />
          </SliderWrapper>
        </SliderContainer> */}
      </AppearanceFieldWrapper>

      <ColorPickersWrapper>
        <AppearanceFieldWrapper>
          <AppearanceLabel>Label color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={elementConfig.style.color}
                onChange={(e) => changeStyleAttribute('color', e)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>

        <AppearanceFieldWrapper>
          <AppearanceLabel>Button color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={elementConfig.style.backgroundColor}
                onChange={(e) => changeStyleAttribute('backgroundColor', e)}
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
                value={elementConfig.style.borderColor}
                onChange={(e) => changeStyleAttribute('borderColor', e)}
              />
            </ColorContainer>
          </ColorContainerWrapper>
        </AppearanceFieldWrapper>
      </ColorPickersWrapper>

      <AppearanceFieldWrapper>
        <SliderContainer>
          <AppearanceLabel>Border Size</AppearanceLabel>
          <SliderWrapper>
            <Slider
              className="slider-border"
              text="px"
              max={6}
              min={0}
              onChange={(e) => changeStyleAttribute('borderWidth', e)}
              value={parseFloat(elementConfig.style.borderWidth)}
            />
          </SliderWrapper>
        </SliderContainer>
      </AppearanceFieldWrapper>

      <AppearanceFieldWrapper>
        <SliderContainer>
          <AppearanceLabel>Border Radius</AppearanceLabel>
          <SliderWrapper>
            <Slider
              className="slider-border"
              text="px"
              max={10}
              min={1}
              onChange={(e) => changeStyleAttribute('borderRadius', e)}
              value={parseFloat(elementConfig.style.borderRadius)}
            />
          </SliderWrapper>
        </SliderContainer>
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
    width: 100%;
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

export const SliderLabel = styled.label`
  width: 11rem;
  position: relative;
  top: 0.5rem;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;
