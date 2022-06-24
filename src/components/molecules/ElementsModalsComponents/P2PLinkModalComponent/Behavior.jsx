import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behaviour() {
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open Campaigns</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="My awesome campaign #5" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Frequency</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="My awesome campaign #5" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Designation</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="My awesome campaign #5" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <Checkbox
          pink
          className="behavior-checkbox"
          label="Allow funraiser to change designation"
        />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Designation</BehaviorLabel>
        <TextArea
          type="text"
          rows={5}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci senectus augue risus diam. 
Eget varius dictum arcu vulputate dolor viverra a. Integer ac lobortis tristique molestie et, 
id amet sed vestibulum. Ipsum."
        />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel>Default goal</BehaviorLabel>
        <Input className="behavior-input" placeholder="$0.00" />
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behaviour;

export const BehaviourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 2.4rem 2.4rem 2.4rem;

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
    width: 100%;
    margin-bottom: 0rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }
  .campaign-input {
    max-width: 30.6rem;
  }
`;

export const BehaviorLabel = styled.label`
  display: flex;
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

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 11.6rem !important;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 5px;
  resize: none;
  padding: 2.2rem 3.5rem 3.1rem 1.5rem;
`;
