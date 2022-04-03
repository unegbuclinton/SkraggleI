import React from "react";
import Input from "components/atoms/Input/Input";
import { DetailLabel, DetailsSubHeading, EventWrapper } from "./styles";

function EventInformation() {
  return (
    <div>
      <DetailsSubHeading>Event information</DetailsSubHeading>
      <EventWrapper>
        <DetailLabel className="name-label">Name</DetailLabel>
        <Input
          className="details-input"
          type="text"
          placeholder="A day with orphans"
        />
        <div>
          <div className="text-editor">Text Editor</div>
        </div>
        <DetailLabel>Event sold out message</DetailLabel>
        <Input
          className="details-input message-input"
          type="text"
          placeholder="Lorem ipsam"
        />
      </EventWrapper>
    </div>
  );
}

export default EventInformation;
