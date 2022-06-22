import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Form() {
  return (
    <FormWrapper>
      <FormFieldWrapper>
        <FormLabel>Title</FormLabel>
        <Input className="form-input" placeholder="Your most generous donation" />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Text color</FormLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#477BE0" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Background color</FormLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#FFFFFF" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Icon color</FormLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#FFFFFF" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Border size</FormLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Border radius</FormLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <FormLabel>Border color</FormLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <input type="color" value="#1E003E" className="color-input" />
            #477BE0
          </ColorContainer>
        </ColorContainerWrapper>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <FormLabel></FormLabel>
        <Checkbox pink className="form-checkbox" />
        Show shadow
      </FormFieldWrapper>
    </FormWrapper>
  );
}

export default Form;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  .color-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
  }
  .color-input::-webkit-color-swatch {
    border-radius: 50%;
    border: 1px solid #e6eff1;
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

export const FormFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .archive-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .update-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1rem;
  justify-content: center;
  width: 13.4rem;
  height: 6.4rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 5px;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
