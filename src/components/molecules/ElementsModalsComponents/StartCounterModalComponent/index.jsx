import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import CopyField from 'components/atoms/CopyField';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import {
  CopyContainer,
  CopyLabel,
  StartCounterContainer,
  StartCounterFieldWrapper,
  StartCounterFooter,
  StartCounterheader,
  StartCounterLabel,
  StartCounterWrapper,
  UrlLabel
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
            <StartCounterLabel className="element-label">Element Name</StartCounterLabel>
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
          <Input className="campaign-input" placeholder="Select campaign" />
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel>Currency</StartCounterLabel>
          <Input className="counter-input" placeholder="USD  |  US Dollar" />
        </StartCounterFieldWrapper>

        <StartCounterFieldWrapper>
          <StartCounterLabel>Start date</StartCounterLabel>
          <Checkbox label="Set start date" className="counter-checkbox" />
          <UrlLabel>?</UrlLabel>
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel> End date</StartCounterLabel>
          <Checkbox label="Set end date" className="counter-checkbox" />
          <UrlLabel className="set-date">?</UrlLabel>
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel className="add-amount">Add amount</StartCounterLabel>
          <div>
            <Input className="amount-input" placeholder="$0.00" />
          </div>
          <UrlLabel className="amount">?</UrlLabel>
        </StartCounterFieldWrapper>
        <StartCounterFieldWrapper>
          <StartCounterLabel className="marchin-funds">Matching funds</StartCounterLabel>
          <Checkbox label="Set Multiplier" />
          <UrlLabel className="multi">?</UrlLabel>
        </StartCounterFieldWrapper>
        <CopyContainer>
          <CopyLabel>HTML CODE</CopyLabel>
          <CopyField grey />
        </CopyContainer>
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
