import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { donationButtonAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function DonateAppearance() {
  const { donationButton } = useSelector((state) => state.elementIframes);
  const dispatch = useDispatch();

  const [donationProperties, setDonationProperties] = useState(donationButton);
  const {
    label,
    buttonWidth,
    labelColor,
    buttonColor,
    borderColor,
    buttonHeight,
    borderSize,
    borderRadius
  } = donationButton;

  useEffect(() => {
    dispatch(donationButtonAction(donationProperties));
  }, [donationProperties]);

  // useEffect(() => {
  //   setDonationProperties(donationButton);
  // });
  const handleChange = (value, key) => {
    setDonationProperties({ ...donationProperties, [key]: value });
  };
  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input
        type="text"
        className="input-field"
        placeholder="Donate"
        value={label}
        onChange={(event) => handleChange(event.target.value, 'label')}
      />
      <ColorsWrapper>
        <WrapperColor>
          <ColorLabel>Label color</ColorLabel>
          <ColorComponents
            type="color"
            value={labelColor}
            onChange={(event) => handleChange(event.target.value, 'labelColor')}
          />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Button color</ColorLabel>
          <ColorComponents
            type="color"
            value={buttonColor}
            onChange={(event) => handleChange(event.target.value, 'buttonColor')}
          />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Icon color</ColorLabel>
          <ColorComponents type="color" />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Border color</ColorLabel>
          <ColorComponents
            type="color"
            value={borderColor}
            onChange={(event) => handleChange(event.target.value, 'borderColor')}
          />
        </WrapperColor>
      </ColorsWrapper>
      <SliderContainer>
        <SliderLabel>Button Height</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
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
            // min={}
            // max={}
            text="px"
            value={buttonWidth}
            onChange={(event) => handleChange(event.target.value, 'buttonWidth')}
          />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            min={0}
            max={6}
            text="px"
            value={borderSize}
            onChange={(event) => handleChange(event.target.value, 'borderSize')}
          />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Button radius</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            min={0}
            max={24}
            value={borderRadius}
            onChange={(event) => handleChange(event.target.value, 'borderRadius')}
          />
        </SliderWrapper>
      </SliderContainer>

      <CheckboxContainer>
        <Checkbox checked={(event) => handleChange(event.target.value, 'boxShadow')} />
        <CheckboxLabel>Show shadow</CheckboxLabel>
      </CheckboxContainer>
    </DonateAppearanceWrapper>
  );
}

export default DonateAppearance;

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
