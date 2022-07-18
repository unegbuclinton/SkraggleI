import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { donationLevelAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function DonationBtn() {
  const { donationLevel } = useSelector((state) => state.elementIframes);
  const { labelColor, buttonColor, buttonBorderSize, buttonBorderRadius, buttonBorderColor } =
    donationLevel;
  const dispatch = useDispatch();

  const [donationLevelProperties, setDonationLevelProperties] = useState(donationLevel);

  const handleChange = (value, key) => {
    setDonationLevelProperties({ ...donationLevelProperties, [key]: value });
  };
  useEffect(() => {
    dispatch(donationLevelAction(donationLevelProperties));
  }, [donationLevelProperties]);
  return (
    <AppearanceWrapper>
      <InputWrapper className="title">
        <MessageLabel>Open Campaigns</MessageLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="BGA Demo #2" />
        </Wrapper>
      </InputWrapper>
      <ColorWrapper>
        <ColorContainer>
          <MessageLabel className="background-label">Label color</MessageLabel>
          <ColorComponents
            type="color"
            value={labelColor}
            onChange={(event) => handleChange(event.target.value, 'labelColor')}
          />
        </ColorContainer>
        <ColorContainer>
          <MessageLabel className="color-label">Button color</MessageLabel>
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
            max={4}
            value={buttonBorderSize}
            onChange={(event) => handleChange(event.target.value, 'buttonBorderSize')}
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
            max={28}
            text="px"
            value={buttonBorderRadius}
            onChange={(event) => handleChange(event.target.value, 'buttonBorderRadius')}
          />
        </SliderWrapper>
      </SliderContainer>
      <ColorWrapper>
        <ColorContainer>
          <MessageLabel className="border-color">Border color</MessageLabel>
          <ColorComponents
            type="color"
            value={buttonBorderColor}
            onChange={(event) => handleChange(event.target.value, 'buttonBorderColor')}
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

export default DonationBtn;

const AppearanceWrapper = styled.div`
  margin-top: 3.2rem;
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.torquoise};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.4rem;
  }
  .checkbox {
    margin: 0 0 3.9rem 22.5rem;
  }

  .title {
    padding-left: 7.2rem;
  }
  .border-radius {
    margin-left: 11rem;
  }
  .border-label {
    width: 15rem;
  }
  .border-color {
    width: 9.9rem;
    margin-left: 11rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const MessageLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  white-space: nowrap;
`;

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  .color-label {
    padding-top: 1rem;
    width: 9.8rem;
    margin-left: 11.2rem;
  }
  .background-label {
    width: 8.9rem;
    margin-left: 12.1rem;
  }
`;

const ColorWrapper = styled.div``;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 0 0 2rem 8.5rem;
  .default-amount {
    margin-right: 1.6rem;
  }
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
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
