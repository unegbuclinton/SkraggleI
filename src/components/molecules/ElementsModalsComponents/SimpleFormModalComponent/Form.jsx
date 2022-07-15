import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { useElement } from 'context';
import React from 'react';
import styled from 'styled-components';

function Form() {
  const { elementConfig, changeStyleAttribute } = useElement();

  return (
    <FormWrapper>
      <FormFieldWrapper>
        <FormLabel>Form size</FormLabel>
        <SliderWrapper>
          <Slider
            className="slider-border"
            text="px"
            min={40}
            max={150}
            onChange={(e) => changeStyleAttribute('width', e)}
            value={parseFloat(elementConfig.style.width)}
            // value={formSize}
            // onChange={formSizeChange}
          />
        </SliderWrapper>
      </FormFieldWrapper>
    </FormWrapper>
  );
}

export default Form;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.2rem;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
  .form-checkbox {
    margin-left: -2rem;
  }

  .form-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
`;

export const FormLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
