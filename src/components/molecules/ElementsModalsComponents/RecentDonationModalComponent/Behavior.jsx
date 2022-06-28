import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
// import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behaviour() {
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open Campaigns</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Select campaigns" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Donor’s name</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Full name" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Donation amount" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Donor’s location" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Donation comment" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <Checkbox pink className="behavior-checkbox" label="Donation date" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <SliderContainer>
          <BehaviorLabel>Number of rows</BehaviorLabel>
          <SliderWrapper>
            <Slider className="slider-border" />
          </SliderWrapper>
        </SliderContainer>
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behaviour;

export const BehaviourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;

  .radio-field {
    align-items: baseline;
    display: flex;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
  gap: 0.8rem;

  .input-wrapper {
    display: flex;
  }
  .behavior-dropdown {
    width: 100%;
  }

  .dropdown-icon {
    width: 100%;
  }

  .behavior-input {
    max-width: 16rem;
    margin-bottom: 0rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }
`;

export const BehaviorLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const SliderContainer = styled.div`
  display: flex;
  flex: 0 auto;
  width: 100%;
  gap: 1.6rem;
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
