import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import RadioGroup from 'components/atoms/RadioGroup';
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
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Designation</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel />
        <Checkbox pink />
        Allow donor change designation
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel />
        <Checkbox pink />
        Show suggested amounts
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper className="radio-field">
        <BehaviorLabel>Default amount</BehaviorLabel>
        <RadioGroup
          radioData={[
            {
              labelText: 'Allow donor change designation',
              value: 1
            },
            {
              labelText: 'Customize',
              value: 2
            }
          ]}
        />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper className="radio-field">
        <BehaviorLabel>Designation</BehaviorLabel>
        <RadioGroup
          radioData={[
            {
              labelText: 'Match checkout settings',
              value: 1
            },
            {
              labelText: 'Hide designation',
              value: 2
            }
          ]}
        />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper className="radio-field">
        <BehaviorLabel>Tribute</BehaviorLabel>
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
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper className="radio-field">
        <BehaviorLabel>Comment</BehaviorLabel>
        <RadioGroup
          radioData={[
            {
              labelText: 'Match checkout settings',
              value: 1
            },
            {
              labelText: 'Hide comments',
              value: 2
            }
          ]}
        />
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behaviour;

export const BehaviourWrapper = styled.div`
  padding: 3.2rem 3.8rem 0 0;
  .radio-field {
    align-items: baseline;
    display: flex;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .behavior-dropdown {
    width: 30.6rem;
    margin-left: -0.3rem;
  }
  .behavior-checkbox {
    margin-left: -2rem;
  }

  .behavior-input {
    width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .behavior-goal__input {
    width: 21rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .behavior-amount__input {
    width: 16rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
`;

export const BehaviorLabel = styled.label`
  width: 35%;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const BehaviorFooter = styled.div`
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
