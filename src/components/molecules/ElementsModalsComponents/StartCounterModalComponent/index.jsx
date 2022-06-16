import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import {
  StartCounterContainer,
  StartCounterFieldWrapper,
  StartCounterFooter,
  StartCounterheader,
  StartCounterLabel,
  StartCounterWrapper
} from './styles';

function StartCounterModalComponent() {
  return (
    <StartCounterWrapper>
      <Card className="counter-card">
        <StartCounterContainer>
          <StartCounterheader>
            Display an animated statistic of your campaign’s performance.
          </StartCounterheader>
          <StartCounterFieldWrapper>
            <StartCounterLabel>Element Name</StartCounterLabel>
            <Input className="counter-input" placeholder="start-counter" />
          </StartCounterFieldWrapper>
        </StartCounterContainer>
      </Card>
      <Card className="counter-card__secondlayer">
        <StartCounterFieldWrapper>
          <StartCounterLabel>Counter type</StartCounterLabel>
          <SelectDropDown className="counter-dropdown" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel> Campaign</StartCounterLabel>
          <Input className="campaign-input" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel>Campaign</StartCounterLabel>
          <Input className="counter-input" />
        </StartCounterFieldWrapper>

        <StartCounterFieldWrapper>
          <StartCounterLabel>Start date</StartCounterLabel>
          <Checkbox label="Set start date" className="counter-checkbox" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel> End date</StartCounterLabel>
          <Checkbox label="Set end date" className="counter-checkbox" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel>Add amount</StartCounterLabel>
          <Input className="amount-input" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel>Matching funds</StartCounterLabel>
          <Checkbox label="Set Multiplier" />
        </StartCounterFieldWrapper>

        <StartCounterFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>
          <Button className="update-btn" auth>
            Update Element
          </Button>
        </StartCounterFooter>
      </Card>
    </StartCounterWrapper>
  );
}

export default StartCounterModalComponent;
