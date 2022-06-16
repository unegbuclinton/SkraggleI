import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import React from 'react';
// import Appeearance from './Appeearance';
import Behavior from './Behavior';
import {
  GoalMeterFieldWrapper,
  GoalMeterHeaderText,
  GoalMeterLabel,
  GoalMeterWrapper
} from './styles';

function GoalMeterModalComponent() {
  return (
    <GoalMeterWrapper>
      <Card className="goalmeter-card">
        <GoalMeterHeaderText>
          Display an animated progress bar of your campaign’s performance.
        </GoalMeterHeaderText>
        <GoalMeterFieldWrapper>
          <GoalMeterLabel>Element name</GoalMeterLabel>
          <Input className="goal-meter__input" placeholder="Goal Meter #2" />
        </GoalMeterFieldWrapper>
        {/* <Appeearance /> */}
        <Behavior />
      </Card>
    </GoalMeterWrapper>
  );
}

export default GoalMeterModalComponent;
