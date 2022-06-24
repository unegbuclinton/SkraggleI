// import Button from 'components/atoms/Button/Button';
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
        <BehaviorLabel className="open-campaign">Open Campaigns</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="BGA Demo #2" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel className="start-date">Start Date</BehaviorLabel>
        <Checkbox className="behavior-checkbox" />
        <CheckboxLabel>Set start date</CheckboxLabel>
        <UrlLabel>?</UrlLabel>
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel className="end-date">End Date</BehaviorLabel>
        <Checkbox className="behavior-checkbox" />
        <CheckboxLabel>Set end date</CheckboxLabel>
        <UrlLabel className="end-label">?</UrlLabel>
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel className="currency">Currency</BehaviorLabel>
        <Input className="behavior-input" placeholder="USD  |  US Dollar" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel className="goal">Goal</BehaviorLabel>
        <Input className="behavior-goal__input" placeholder="$10,000" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel className="add-amount">Amount</BehaviorLabel>
        <div>
          <Input className="behavior-amount__input" placeholder="$0.00" />
        </div>
        <UrlLabel className="amount-label">?</UrlLabel>
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper className="checkbox-wrapper">
        <BehaviorLabel className="fund">Matching funds</BehaviorLabel>
        <Checkbox />
        <CheckboxLabel>Set multiplier</CheckboxLabel>
        <UrlLabel className="set-label">?</UrlLabel>
      </BehaviorFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behavior;

const BehaviourWrapper = styled.div``;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  .checkbox-wrapper {
    margin-bottom: 3.2rem;
  }

  .behavior-dropdown {
    width: 30.6rem;
    margin-left: -0.3rem;
    .react-select {
      &__control {
        background-color: ${COLORS.torquoise};
      }
    }
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
  .start-date {
    width: 11rem;
    white-space: nowrap;
    margin-left: 13.5rem;
  }
  .open-campaign {
    margin-left: 7.6rem;
  }
  .end-date {
    width: 10.3rem;
    white-space: nowrap;
    margin-left: 14.3rem;
  }
  .currency {
    width: 10.3rem;
    margin-left: 14.6rem;
    white-space: nowrap;
    height: 4.4rem;
    padding-top: 0.4rem;
  }
  .goal {
    width: 5rem;
    white-space: nowrap;
    margin-left: 18rem;
    height: 4.4rem;
    padding-top: 0.4rem;
  }
  .add-amount {
    width: 5rem;
    margin-left: 16.5rem;
    height: 4.4rem;
    padding-top: 0.4rem;
  }
  .fund {
    width: 13rem;
    margin-left: 10rem;
  }
  .end-label {
    margin-left: 19.4rem;
  }
  .amount-label {
    margin-left: 3.6rem;
    margin-bottom: 1.5rem;
  }
  .set-label {
    margin-left: 8.7rem;
  }
`;

export const BehaviorLabel = styled.label`
  width: 15.8rem;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
  margin-right: 1.6rem;
`;

const CheckboxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['gray-500']};
`;

const UrlLabel = styled.span`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  display: flex;
  height: 1.4rem;
  width: 1.4rem;
  border: 0.1rem solid ${COLORS['grey-400']};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  margin: 0.3rem 0 0 18.8rem;
`;
