import React from "react";
import {
  Container,
  DetailsHeading,
  DetailsWrapper,
  ButtonWrapper,
} from "./styles";
import Button from "components/atoms/Button/Button";
import EventInformation from "./Information";
import EventLocation from "./Location";
import DisplayOptions from "./DisplayOptions";
import DisplaySettings from "./DisplaySettings";
import CutOffDate from "./CutOffDate";
import AdminNotification from "./AdminNotification";
import RegistrationReceipt from "./RegistrationReceipt";
import RecipientBody from "./RecipientBody";

function Details() {
  return (
    <DetailsWrapper>
      <DetailsHeading>A day with orphans</DetailsHeading>
      <Container>
        <EventInformation />
        <EventLocation />
        <DisplayOptions />
        <DisplaySettings />
        <CutOffDate />
        <AdminNotification />
        <RegistrationReceipt />
      </Container>
      <RecipientBody />
      <ButtonWrapper>
        <Button className="cancel-btn">Cancel</Button>
        <Button className="save-btn">Save</Button>
      </ButtonWrapper>
    </DetailsWrapper>
  );
}

export default Details;
