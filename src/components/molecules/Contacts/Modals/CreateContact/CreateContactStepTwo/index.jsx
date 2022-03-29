import Button from "components/atoms/Button/Button";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import React from "react";
import {
  ButtonContainer,
  AddressContainer,
  FormContainer,
  AddressInput,
  FormInput,
  FormLabel,
  ModalContainer,
  ModalWrapper,
} from "./styles";
import { subcription } from "utilities/modalData";

function ContactStepTwo({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer>
          <FormLabel>ADDRESS</FormLabel>
          <FormInput type="text" placeholder="Address" />
          <FormInput type="text" placeholder="Unit" />

          <AddressContainer>
            <AddressInput
              className="address-input"
              type="text"
              placeholder="City"
            />
            <AddressInput
              className="address-input"
              type="text"
              placeholder="State"
            />
          </AddressContainer>
          <AddressContainer>
            <AddressInput
              className="address-input"
              type="text"
              placeholder="Postal/Zip"
            />
            <AddressInput
              className="address-input"
              type="text"
              placeholder="Country"
            />
          </AddressContainer>
          <FormLabel>HOUSEHOLD</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>ASSIGNEE</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>PRIORITY</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>TAGS</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <ButtonContainer>
            <Button
              className="cancel"
              type="button"proute
              onClick={onClose}
              auth
              invert
            >
              Cancel
            </Button>
            <Button className="continue" onClick={handleSubmit}>
              Save
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ContactStepTwo;
