import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import React from "react";
import {
  ButtonContainer,
  DateContainer,
  FormContainer,
  FormInput,
  FormLabel,
  ModalContainer,
  ModalWrapper,
} from "./styles";
import { subcription } from "utilities/modalData";
import Button from "components/atoms/Button/Button";

function CreateContactStepOne({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer>
          <FormLabel>FIRST NAME</FormLabel>
          <FormInput type="text" placeholder="First Name" />
          <FormLabel>LAST NAME</FormLabel>
          <FormInput type="text" placeholder="Last name" />
          <FormLabel>EMAIL</FormLabel>
          <FormInput type="email" placeholder="Email" />
          <FormLabel>EMAIL SUBSCRIPTION STATUS</FormLabel>
          <CustomDropdown className="email-dropdown" data={subcription} />
          <FormLabel>BIRTH DATE</FormLabel>
          <DateContainer>
            <CustomDropdown className="date-dropdown" data={subcription} />
            <CustomDropdown className="date-dropdown" data={subcription} />
            <CustomDropdown className="date-dropdown" data={subcription} />
          </DateContainer>
          <FormLabel>COMPANY</FormLabel>
          <FormInput type="text" placeholder="Company" />
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button className="continue">Continue</Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateContactStepOne;
