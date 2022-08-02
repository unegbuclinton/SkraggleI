import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { p2pButtonAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Appearance() {
  const { p2pButtons } = useSelector((state) => state.elementIframes);
  const dispatch = useDispatch();

  const [p2pButtonProperties, setP2PButtonProperties] = useState(p2pButtons);
  const {
    label,
    buttonWidth,
    labelColor,
    buttonColor,
    borderColor,
    buttonHeight,
    borderSize,
    borderRadius
  } = p2pButtons;

  useEffect(() => {
    dispatch(p2pButtonAction(p2pButtonProperties));
  }, [p2pButtonProperties]);

  const handleChange = (value, key) => {
    setP2PButtonProperties({ ...p2pButtonProperties, [key]: value });
  };

  return (
    <AppearanceWrapper>
      <AppearanceFieldWrapper>
        <AppearanceLabel>Label</AppearanceLabel>
        <Input
          type="text"
          className="appearance-input"
          placeholder="Recent Donations"
          value={label}
          onChange={(event) => handleChange(event.target.value, 'label')}
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
              min={40}
              max={100}
              value={buttonHeight}
              onChange={(event) => handleChange(event.target.value, 'buttonHeight')}
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
              min={120}
              max={300}
              value={buttonWidth}
              onChange={(event) => handleChange(event.target.value, 'buttonWidth')}
            />
          </SliderWrapper>
        </SliderContainer>
      </AppearanceFieldWrapper>

      <ColorPickersWrapper>
        <AppearanceFieldWrapper>
          <AppearanceLabel>Label color</AppearanceLabel>
          <ColorContainerWrapper>
            <ColorContainer>
              <ColorComponents
                type="color"
                value={labelColor}
                onChange={(event) => handleChange(event.target.value, 'labelColor')}
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
                value={buttonColor}
                onChange={(event) => handleChange(event.target.value, 'buttonColor')}
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
                onChange={(event) => handleChange(event.target.value, 'borderColor')}
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
              value={borderSize}
              onChange={(event) => handleChange(event.target.value, 'borderSize')}
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
              value={borderRadius}
              onChange={(event) => handleChange(event.target.value, 'borderRadius')}
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
