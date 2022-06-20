import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Appeearance from './Appeearance';
import Behavior from './Behavior';
import {
  GoalMeterFieldWrapper,
  GoalMeterFooter,
  GoalMeterHeaderText,
  GoalMeterLabel,
  GoalMeterWrapper
} from './styles';

function GoalMeterModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'APPEARANCE', component: <Appeearance /> }
  ];
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
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="goalmeter-card">
        <GoalMeterFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Archive
          </Button>
        </GoalMeterFooter>
      </Card>
    </GoalMeterWrapper>
  );
}

export default GoalMeterModalComponent;
