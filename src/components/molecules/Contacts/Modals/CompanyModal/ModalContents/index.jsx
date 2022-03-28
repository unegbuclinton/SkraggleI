import Button from "components/atoms/Button/Button";
import React from "react";
import {
  ButtonContainer,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  FormContainer,
  FormInput,
  FormLabel,
  ModalContainer,
  ModalWrapper,
  TagContainer,
  TagWrapper,
} from "./styles";

function CreateCompany({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer>
          <FormLabel>COMPANY NAME</FormLabel>
          <FormInput type="text" placeholder="Company Name" />
          <FormLabel>PRIMANRY PHONE</FormLabel>
          <FormInput type="text" placeholder="Primary Phone" />
          <FormLabel>TAGS</FormLabel>
          <FormInput type="text" placeholder="Tags" />
          <TagContainer>
            <TagWrapper>
              <h2 className="title">Auto Tag</h2>
              <p className="info">Auto Tag Contacts who fill this form</p>
            </TagWrapper>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </TagContainer>
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button className="continue">Save</Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateCompany;
