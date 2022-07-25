// import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { goalMeterAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Appeearance() {
  const { goalMeter } = useSelector((state) => state.elementIframes);
  const { labelColor, backgroundColor, borderSize, progressBarColor, borderRadius } = goalMeter;
  const dispatch = useDispatch();

  const [goalMeterProperties, setGoalMeterProperties] = useState(goalMeter);

  const handleChange = (value, key) => {
    setGoalMeterProperties({ ...goalMeterProperties, [key]: value });
  };

  useEffect(() => {
    dispatch(goalMeterAction(goalMeterProperties));
  }, [goalMeterProperties]);

  return (
    <AppearanceWrapper>
      <AppearanceCheckbox>
        <Checkbox label="Show Label" className="label-checkbox" pink />
      </AppearanceCheckbox>
      <div className="content-align">
        <ColorWrapper>
          <ColorContainer>
            <MessageLabel className="label-color">Label color</MessageLabel>
            <ColorComponents
              type="color"
              value={labelColor}
              onChange={(event) => handleChange(event.target.value, 'labelColor')}
            />
          </ColorContainer>
        </ColorWrapper>

        <ColorWrapper>
          <ColorContainer>
            <MessageLabel className="bar-color">Progress bar color</MessageLabel>
            <ColorComponents
              type="color"
              value={progressBarColor}
              onChange={(event) => handleChange(event.target.value, 'progressBarColor')}
            />
          </ColorContainer>
        </ColorWrapper>

        <ColorWrapper>
          <ColorContainer>
            <MessageLabel className="bg-color">Background color</MessageLabel>
            <ColorComponents
              type="color"
              value={backgroundColor}
              onChange={(event) => handleChange(event.target.value, 'backgroundColor')}
            />
          </ColorContainer>
        </ColorWrapper>
      </div>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            min={0}
            max={4}
            text="px"
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
            min={0}
            max={10}
            text="px"
            value={borderRadius}
            onChange={(event) => handleChange(event.target.value, 'borderRadius')}
          />
        </SliderWrapper>
      </SliderContainer>
      <AppearanceCheckbox>
        <Checkbox label="Show animation" className="animation-checkbox" pink />
      </AppearanceCheckbox>
    </AppearanceWrapper>
  );
}

export default Appeearance;

export const AppearanceWrapper = styled.div`
  margin-top: 3.2rem;
  .content-align {
    display: flex;
    flex-direction: column;
    /* padding-left: 6.5rem; */
  }
  .border-label {
    width: 15rem;
  }
`;

export const AppearanceContentContainer = styled.div`
  position: relative;

  .container-class {
    width: fit-content;
  }
  .input-label__color {
    position: absolute;
    top: 1rem;
    left: 16.5rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }

  .input-progress__color {
    position: absolute;
    top: 1rem;
    left: 17rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }

  .input-background__color {
    position: absolute;
    top: 1rem;
    left: 16.5rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }
`;
export const AppearanceContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  .appearance-label__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
    margin-left: 5.5rem;
  }
  .appearance-progress__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
  }
  .appearance-background__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
  }
`;

export const AppearanceLabel = styled.p`
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const AppearanceCheckbox = styled.div`
  margin-left: 22.9rem;
  .animation-checkbox {
    margin-bottom: 3.2rem;
  }

  .label-checkbox {
    margin-bottom: 2.4rem;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  .bar-color {
    width: 14.8rem;
    margin-left: 6.5rem;
  }
  .label-color {
    width: 9.8rem;
    margin-left: 11.5rem;
  }
  .bg-color {
    width: 14.1rem;
    margin-left: 7.2rem;
  }
`;

const ColorWrapper = styled.div``;

const MessageLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  white-space: nowrap;
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
  margin: 0 0 1.6rem 13rem;
  font-size: ${FONTSIZES.small};
`;
