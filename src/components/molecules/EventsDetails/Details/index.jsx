import React from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import {
  Container,
  DetailsHeading,
  DetailLabel,
  DetailsSubHeading,
  DetailsWrapper,
  EventWrapper,
  AddressWrapper,
  DetailsText,
  IconWrapper,
  InputWrapper,
  SwitchLabel,
  SwitchWrapper,
  ButtonWrapper,
} from "./styles";
import Input from "components/atoms/Input/Input";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import { state } from "utilities/modalData";
import Switch from "components/atoms/Switch/Switch";
import { DPIconMark, DPIconSkraggleEyeClose } from "icons";
import Button from "components/atoms/Button/Button";

function Details() {
  return (
    <DashboardLayout>
      <DetailsWrapper>
        <DetailsHeading>A day with orphans</DetailsHeading>
        <Container>
          <DetailsSubHeading>Event information</DetailsSubHeading>
          <EventWrapper>
            <DetailLabel>Name</DetailLabel>
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
          <DetailsSubHeading className="event-heading">
            Display options
          </DetailsSubHeading>
          <EventWrapper>
            <IconWrapper>
              <div className="icon-container">
                <DPIconMark />
                <DetailLabel className="icon-label">Mobile</DetailLabel>
              </div>

              <div className="icon-container">
                <DPIconSkraggleEyeClose />
                <DetailLabel className="icon-label">Private</DetailLabel>
              </div>
            </IconWrapper>
          </EventWrapper>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum accumsan, massa ac adipiscing enim bibendum interdum
              dictum nunc. Sit nisl etiam.
            </DetailsText>
            <Button className="add-email-btn">Add an email</Button>
          </EventWrapper>
          <DetailsSubHeading className="notification-heading">
            Event registration receipt
          </DetailsSubHeading>
          <EventWrapper>
            <DetailLabel>Choose a recipt</DetailLabel>
            <CustomDropdown
              className="event-registration-dropdown"
              data={state}
            />
            <DetailsText className="receipt-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum accumsan, massa ac adipiscing enim bibendum interdum
              dictum nunc. Sit nisl etiam.
            </DetailsText>
            <InputWrapper>
              <div>
                <DetailLabel>Receipt title</DetailLabel>
                <Input
                  className="event-registration-input"
                  type="text"
                  placeholder="Event registration"
                />
              </div>

              <div>
                <DetailLabel>Category</DetailLabel>
                <Input
                  className="event-registration-input"
                  type="Events"
                  placeholder="Events"
                />
              </div>
            </InputWrapper>
            <InputWrapper>
              <div className="category-input">
                <DetailLabel>Receipt description</DetailLabel>
                <Input className="event-registration-input" type="text" />
              </div>
            </InputWrapper>
            <InputWrapper>
              <div className="form-input">
                <DetailLabel>Form name</DetailLabel>
                <Input
                  className="event-registration-input"
                  type="text"
                  placeholder="Big Gorilla Apps"
                />
              </div>

              <div className="address-input">
                <DetailLabel>Reply to email address</DetailLabel>
                <Input
                  className="event-registration-input"
                  type="Events"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </InputWrapper>

            <InputWrapper>
              <div>
                <DetailLabel>Subject</DetailLabel>
                <Input
                  className="event-registration-input"
                  type="Events"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
              </div>
            </InputWrapper>
            <SwitchWrapper>
              <SwitchLabel>Including additional recipients</SwitchLabel>
              <Switch />
            </SwitchWrapper>
            <div className="recipient-container">
              <DetailLabel>Receipt Body</DetailLabel>
              <div className="recipient-body"></div>
            </div>
            <DetailsText className="recipient-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum accumsan, massa ac adipiscing enim bibendum interdum
              dictum nunc. Sit nisl etiam.
            </DetailsText>
            <SwitchWrapper>
              <SwitchLabel>Include PDF receipt</SwitchLabel>
              <Switch />
            </SwitchWrapper>
            <ButtonWrapper>
              <Button className="cancel-btn">Cancel</Button>
              <Button className="save-btn">Save</Button>
            </ButtonWrapper>
          </EventWrapper>
        </Container>
      </DetailsWrapper>
    </DashboardLayout>
  );
}

export default Details;
