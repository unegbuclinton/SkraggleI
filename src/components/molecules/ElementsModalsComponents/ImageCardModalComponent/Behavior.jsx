import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open campaign</BehaviorLabel>
        <SelectDropDown
          torquoise
          className="behavior-dropdown"
          placeholder="My awesome campaign #5"
        />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Frequency</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Designation</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>

      <BehaviorFieldWrapper>
        <BehaviorLabel></BehaviorLabel>
        <Checkbox pink label="Allow donor to change desgination" />
      </BehaviorFieldWrapper>

      <RadioFieldWrapper>
        <BehaviorLabel>Default amount</BehaviorLabel>
        <RadioGroup
          radioData={[
            {
              labelText: 'Match checkout settings',
              value: 1
            },
            {
              labelText: 'Hide tribute',
              value: 2
            }
          ]}
        />
      </RadioFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behavior;

export const BehaviourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3.3rem;
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;

  font-size: ${FONTSIZES.small};

  .behavior__campaign {
    max-width: 31.2rem;
    width: 100%;
    background-color: ${COLORS.torquoise};
  }
  .behavior-dropdown {
    max-width: 31.2rem;
    width: 100%;
  }
  .behavior-checkbox {
    margin-left: -2rem;
  }

  .behavior-input {
    max-width: 31.2rem;
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }

  .input-container {
    max-width: 31.2rem;
    width: 100;
  }
`;

export const BehaviorLabel = styled.label`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const ValuesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 37.5rem;
  align-items: center;
  background-color: ${COLORS.torquoise};
  padding: 0.8rem 3.2rem 0.8rem 1.6rem;
  height: 6.4rem;
  border: 1px solid #e6eff1;
  border-radius: 5px;
  margin-bottom: 2.4rem;
`;

export const RadioFieldWrapper = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;
`;
