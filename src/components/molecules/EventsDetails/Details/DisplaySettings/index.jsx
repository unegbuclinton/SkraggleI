import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import {
  DetailLabel,
  DetailsSubHeading,
  EventWrapper,
  InputWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";

function DisplaySettings() {
  return (
    <div>
      <DetailsSubHeading className="event-heading">
        Display settings
      </DetailsSubHeading>
      <EventWrapper>
        <DetailLabel>Maximum number of total participants</DetailLabel>
        <Input className="details-input" type="number" />

        <SwitchWrapper className="option-switch ">
          <SwitchLabel>Enable one time event donations</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <SwitchWrapper className="date">
          <SwitchLabel>Event has start/end date</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <InputWrapper>
          <div>
            <DetailLabel>Event start date</DetailLabel>
            <Input className="date-time-input" type="date" />
          </div>

          <div>
            <DetailLabel>Start time</DetailLabel>
            <Input className="date-time-input" type="time" />
          </div>
        </InputWrapper>

        <InputWrapper>
          <div className="input-container">
            <DetailLabel>Event start date</DetailLabel>
            <Input className="date-time-input end-date" type="date" />
          </div>

          <div className="input-container">
            <DetailLabel>End time</DetailLabel>
            <Input className="date-time-input end-date" type="time" />
          </div>
        </InputWrapper>
      </EventWrapper>
    </div>
  );
}

export default DisplaySettings;
