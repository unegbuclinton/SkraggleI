import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import { state } from "utilities/modalData";
import {
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  InputWrapper,
  SectionWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";

function RegistrationReceipt() {
  return (
    <div>
      <DetailsSubHeading className="notification-heading">
        Event registration receipt
      </DetailsSubHeading>
      <SectionWrapper>
        <DetailLabel>Choose a recipt</DetailLabel>
        <CustomDropdown className="event-registration-dropdown" data={state} />
        <DetailsText className="receipt-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan, massa ac adipiscing enim bibendum interdum dictum nunc. Sit
          nisl etiam.
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
      </SectionWrapper>
    </div>
  );
}

export default RegistrationReceipt;
