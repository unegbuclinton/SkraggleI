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
      <BehaviorFieldWrapper className="campaign-fields">
        <BehaviorLabel>Campaigns</BehaviorLabel>
        <BehaviorCampaignInput>
          <Input className="campaign-input" placeholder="BGA Demo #2"></Input>
          <SelectDropDown className="behavior-dropdown" placeholder="My awesome campaign #5" />
        </BehaviorCampaignInput>
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Maximun amount</BehaviorLabel>
        <Input className="behavior-input" placeholder="BGA Demo #2" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Icon color</BehaviorLabel>
        <div className="dropdown-icon">
          <SelectDropDown className="behavior-dropdown" placeholder="Full name" />
        </div>
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Maximum rows</BehaviorLabel>
        <SliderWrapper>
          <Slider className="slider-border" />
        </SliderWrapper>
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel />
        <Checkbox pink className="behavior-checkbox" />
        Show search box
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behaviour;

export const BehaviourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.2rem;
  .radio-field {
    align-items: baseline;
    display: flex;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
  }
  .campaign-fields {
    display: flex;
    align-items: baseline;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
    font-size: ${FONTSIZES.small};
  }
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  font-size: ${FONTSIZES.small};

  .input-wrapper {
    display: flex;
  }
  .behavior-dropdown {
    max-width: 30.6rem;
  }
  .behavior-checkbox {
    margin-left: -4rem;
  }

  .dropdown-icon {
    width: 100%;
    margin-left: 1rem;
  }

  .behavior-input {
    max-width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .campaign-input {
    max-width: 30.6rem;
  }
`;

export const BehaviorLabel = styled.label`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
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

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 1.7rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
