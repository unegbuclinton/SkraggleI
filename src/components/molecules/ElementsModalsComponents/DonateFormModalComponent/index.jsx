import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import Behaviour from './Behaviour';
// import Appeearance from './Appeearance';
// import Behavior from './Behavior';
import {
  DonationFormWrapper,
  GoalMeterFieldWrapper,
  GoalMeterHeaderText,
  GoalMeterLabel
} from './styles';

function DonateFormModalComponent() {
  return (
    <DonationFormWrapper>
      <Card className="goalmeter-card">
        <GoalMeterHeaderText>
          Display a customizable donation form anywhere on your website.
        </GoalMeterHeaderText>
        <GoalMeterFieldWrapper>
          <GoalMeterLabel>Element name</GoalMeterLabel>
          <Input className="goal-meter__input" placeholder="Donation Form #3" />
        </GoalMeterFieldWrapper>
        <Behaviour />
      </Card>
    </DonationFormWrapper>
  );
}

export default DonateFormModalComponent;
