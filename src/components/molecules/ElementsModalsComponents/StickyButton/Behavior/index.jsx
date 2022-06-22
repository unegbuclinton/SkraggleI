import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  const radioButton = [
    {
      labelText: 'Allow donor change designation',
      value: 1
    },
    {
      labelText: 'Customize',
      value: 2
    }
  ];
  return (
    <BehaviorWrapper>
      <InputWrapper>
        <StickyButtonLabel>Open campaign</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            className="dropdown"
            type="text"
            placeholder="BGA awesome campaign d...."
          />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel>Frequency</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown className="dropdown" type="text" placeholder="Default one time" />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <StickyButtonLabel>Designation</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown className="dropdown" type="text" placeholder="Match checking setting" />
          <CheckBoxWrapper>
            <Checkbox pink />
            <CheckBoxLabel>Element is enabled</CheckBoxLabel>
          </CheckBoxWrapper>
        </Wrapper>
      </InputWrapper>
      <RadioButtonWrapper>
        <StickyButtonLabel className="radio-label">Default amount</StickyButtonLabel>
        <RadioGroup className="radio-btn" radioData={radioButton} />
      </RadioButtonWrapper>
      <NumberInputWrapper>
        <Wrapper>
          <Input
            className="amount-field"
            onWheel={() => document.activeElement.blur()}
            type="number"
            placeholder="$60"
          />
          <CheckBoxWrapper className="checkbox">
            <Checkbox pink />
            <CheckBoxLabel>Allow donor change selected amount</CheckBoxLabel>
          </CheckBoxWrapper>
        </Wrapper>
      </NumberInputWrapper>
    </BehaviorWrapper>
  );
}

export default Behavior;

const BehaviorWrapper = styled.div`
  .dropdown {
    width: 30.6rem;
  }
  .radio-label {
    height: 3rem;
  }
  .amount-field {
    width: 19.9rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 1.8rem;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .checkbox {
    margin-top: 0;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-bottom: 1.6rem;
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  width: 12.6rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin-top: 1.8rem;
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

const RadioButtonWrapper = styled.div`
  padding: 0 0 0 9rem;
  display: flex;
  gap: 1.7rem;
`;

const NumberInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.678rem 0 0 14rem;
`;
