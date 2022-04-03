import React from "react";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import { state } from "utilities/modalData";

import {
  AddressWrapper,
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  EventWrapper,
} from "./styles";

function EventLocation() {
  return (
    <div>
      <DetailsSubHeading className="event-heading">
        Event location
      </DetailsSubHeading>
      <EventWrapper>
        <DetailLabel>Vanue</DetailLabel>
        <Input
          className="details-input"
          type="text"
          placeholder="Lorem Ipsam"
        />

        <DetailLabel>Address</DetailLabel>
        <Input
          className="details-input"
          type="text"
          placeholder="Lorem ipsam"
        />

        <AddressWrapper>
          <div>
            <DetailLabel>City</DetailLabel>
            <Input className="city-input" type="text" placeholder="City" />
          </div>
          <div>
            <DetailLabel>State</DetailLabel>
            <CustomDropdown className="state" data={state} />
          </div>
          <div>
            <DetailLabel>Zip</DetailLabel>
            <Input type="text" className="zip" placeholder="zip" />
          </div>
        </AddressWrapper>
        <div className="switch-wrapper">
          <DetailsText>Enable map link</DetailsText>
          <Switch />
        </div>
      </EventWrapper>
    </div>
  );
}

export default EventLocation;
