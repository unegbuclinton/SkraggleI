import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { simpleFormAction } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Buttons() {
  const { simpleForm } = useSelector((state) => state.elementIframes);

  const { label, labelColor, buttonColor, borderSize, borderRadius, borderColor } = simpleForm;

  const dispatch = useDispatch();

  const [simpleFormProperties, setSimpleFormProperties] = useState(simpleForm);

  useEffect(() => {
    dispatch(simpleFormAction(simpleFormProperties));
  }, [simpleFormProperties]);

  const handleChange = (value, key) => {
    setSimpleFormProperties({ ...simpleFormProperties, [key]: value });
  };
  return (
    <ButtonWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel>Label</ButtonLabel>
        <Input
          className="button-input"
          placeholder="Doante and support"
          value={label}
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Label color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={labelColor}
              onChange={(event) => handleChange(event.target.value, 'labelColor')}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Button color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={buttonColor}
              onChange={(event) => handleChange(event.target.value, 'buttonColor')}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border size</ButtonLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            min={0}
            max={6}
            value={borderSize}
            onChange={(event) => handleChange(event.target.value, 'borderSize')}
          />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border radius</ButtonLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            value={borderRadius}
            onChange={(event) => handleChange(event.target.value, 'borderRadius')}
          />
        </SliderWrapper>
      </ButtonFieldWrapper>

      <ButtonFieldWrapper>
        <ButtonLabel>Border color</ButtonLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={borderColor}
              onChange={(event) => handleChange(event.target.value, 'borderColor')}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonFieldWrapper>
      <ButtonFieldWrapper>
        <ButtonLabel></ButtonLabel>
        <Checkbox pink className="button-checkbox" />
        Show Shadow
      </ButtonFieldWrapper>
    </ButtonWrapper>
  );
}

export default Buttons;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const ButtonFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .button-checkbox {
    margin-left: -4rem;
  }

  .button-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
`;

export const ButtonLabel = styled.label`
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

export const ColorCircle = styled.div`
  width: 23.22px;
  height: 23.22px;
  border-radius: 50%;
  background-color: #477be0;
  border: 1px solid #e6eff1;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
