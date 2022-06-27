import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open campaign</BehaviorLabel>
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
        <BehaviorLabel>Default amount</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behavior;

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
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};

  .behavior-dropdown {
    width: 30.6rem;
    margin-left: 1.7rem;
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
  width: 30%;
  display: flex;
  justify-content: flex-end;
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
