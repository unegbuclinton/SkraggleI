import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import React from "react";
import {
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  EventWrapper,
} from "./styles";

function AdminNotification() {
  return (
    <div>
      <DetailsSubHeading className="notification-heading">
        Admin notifications
      </DetailsSubHeading>
      <EventWrapper>
        <DetailsText className="notification-info">
          Notify the following person by email when a registration occurs
        </DetailsText>
        <DetailLabel>Choose recipients</DetailLabel>
        <Input className="choose-recipient-input" type="search" />
        <DetailsText className="email-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan, massa ac adipiscing enim bibendum interdum dictum nunc. Sit
          nisl etiam.
        </DetailsText>
        <Button className="add-email-btn">Add an email</Button>
      </EventWrapper>
    </div>
  );
}

export default AdminNotification;
