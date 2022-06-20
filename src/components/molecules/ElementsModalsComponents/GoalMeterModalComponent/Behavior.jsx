import Button from 'components/atoms/Button/Button';
// import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Behavior() {
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open Campaigns</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Start Date</BehaviorLabel>
        <Checkbox className="behavior-checkbox" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>End Date</BehaviorLabel>
        <Checkbox className="behavior-checkbox" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Currency</BehaviorLabel>
        <Input className="behavior-input" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Goal</BehaviorLabel>
        <Input className="behavior-goal__input" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Amount</BehaviorLabel>
        <Input className="behavior-amount__input" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Matching funds</BehaviorLabel>
        <Checkbox />
      </BehaviorFieldWrapper>

      <BehaviorFooter>
        <Button className="archive-btn" auth invert>
          Archive
        </Button>
        <Button className="update-btn" auth>
          Update Element
        </Button>
      </BehaviorFooter>
    </BehaviourWrapper>
  );
}

export default Behavior;

const BehaviourWrapper = styled.div``;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;

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
  width: 30%;
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
