import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import {
  DetailLabel,
  EventWrapper,
  InputWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";

function CutOffDate() {
  return (
    <div>
      <EventWrapper>
        <SwitchWrapper className="registration-switch ">
          <SwitchLabel>Event has registration cutoff date</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <InputWrapper>
          <div className="input-container">
            <DetailLabel>Event registration cutoff date</DetailLabel>
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

export default CutOffDate;
