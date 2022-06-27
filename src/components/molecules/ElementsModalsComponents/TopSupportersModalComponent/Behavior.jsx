import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
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
        <SelectDropDown
          torquoise
          className="behavior-dropdown"
          placeholder="My awesome campaign #5"
        />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Minimum amount</BehaviorLabel>
        <Input className="behavior-input" placeholder="$0.00" />
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
        <SliderContainer>
          <BehaviorLabel>Maximum rows</BehaviorLabel>
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
    max-width: 31.2rem;
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

export const BehaviorCampaignInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-left: 1rem;
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
