import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
// import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useElement } from 'context';
import React, { useEffect } from 'react';
import styled from 'styled-components';

function DonateAppearance() {
  // vars
  const { elementConfig, setElementConfig, toggleElementBoxShadow } = useElement();

  // hooks
  useEffect(() => {
    setElementConfig(draft => { draft.type = 'button' });
  }, []);

  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input type="text" className="input-field" placeholder="Donate" onChange={e => setElementConfig(draft => { draft.children = e.target.value })} />
      <ColorsWrapper>
        <WrapperColor>
          <ColorLabel>Label color</ColorLabel>
          <ColorComponents type="color" value={elementConfig.style.color} onChange={e => setElementConfig(draft => { draft.style.color = e.target.value })} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Button color</ColorLabel>
          <ColorComponents type="color" value={elementConfig.style.backgroundColor} onChange={e => setElementConfig(draft => { draft.style.backgroundColor = e.target.value })} />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Icon color</ColorLabel>
          <ColorComponents
            type="color"
            value={elementConfig.icon.color}
            onChange={e => setElementConfig(draft => { draft.icon.color = e.target.value })}
          />
        </WrapperColor>
        <WrapperColor>
          <ColorLabel>Border color</ColorLabel>
          <ColorComponents type="color" value={elementConfig.style.borderColor} onChange={e => setElementConfig(draft => { draft.style.borderColor = e.target.value })} />
        </WrapperColor>
      </ColorsWrapper>
      <SliderContainer>
        <SliderLabel>Button Height</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            onChange={e => setElementConfig(draft => { draft.style.height = e.target.value })}
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
            onChange={e => setElementConfig(draft => { draft.style.width = e.target.value })}
            value={parseFloat(elementConfig.style.width)}
          />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Border size</SliderLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            sliderText="slider-text"
            text="px"
            onChange={e => setElementConfig(draft => { draft.style.borderWidth = e.target.value })}
            value={parseFloat(elementConfig.style.borderWidth)}
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
            onChange={e => setElementConfig(draft => { draft.style.borderRadius = e.target.value })}
            value={parseFloat(elementConfig.style.borderRadius)}
          />
        </SliderWrapper>
      </SliderContainer>
      <span onClick={toggleElementBoxShadow}>
        <CheckboxContainer>
          <Checkbox checked={elementConfig.style.boxShadow !== undefined} />
          <CheckboxLabel>Show shadow</CheckboxLabel>
        </CheckboxContainer>
      </span>
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
