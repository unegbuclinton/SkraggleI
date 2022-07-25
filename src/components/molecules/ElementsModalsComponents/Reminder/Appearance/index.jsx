import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { reminderAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Appearance() {
  const { reminder } = useSelector((state) => state.elementIframes);

  const [remindProperties, setRemindProperties] = useState(reminder);

  useEffect(() => {
    dispatch(reminderAction(remindProperties));
  }, [remindProperties]);

  const dispatch = useDispatch();

  const handleChange = (value, key) => {
    setRemindProperties({ ...remindProperties, [key]: value });
  };
  const {
    // boxShadow,
    labelColor,
    // backgroundColor,
    borderSize,
    buttonColor,
    borderRadius,
    borderColor,
    iconColor
  } = reminder;

  return (
    <AppearanceWrapper>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Label color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={labelColor}
            onChange={(event) => handleChange(event.target.value, 'labelColor')}
          />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Button color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={buttonColor}
            onChange={(event) => handleChange(event.target.value, 'buttonColor')}
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
            min={0}
            max={6}
            value={borderSize}
            onChange={(event) => handleChange(event.target.value, 'borderSize')}
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
            min={0}
            max={10}
            value={borderRadius}
            onChange={(event) => handleChange(event.target.value, 'borderRadius')}
          />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Border color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={borderColor}
            onChange={(event) => handleChange(event.target.value, 'borderColor')}
          />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Icon color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={iconColor}
            onChange={(event) => handleChange(event.target.value, 'iconColor')}
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
  margin-top: 3.2rem;
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.7rem;
  }
  .border-radius {
    margin-left: 10.3rem;
  }
  .border-label {
    width: 15rem;
  }
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  .color-label {
    padding-top: 1rem;
    width: 14rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const ColorWrapper = styled.div`
  padding-left: 7rem;
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
