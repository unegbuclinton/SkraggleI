import React, { useContext } from "react";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
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
import MultiFormContext from "../ContactFormContext/MultiFormContext";

function CreateContactStepOne({ onClose }) {
  const { stepOne, setStepOne, next } = useContext(MultiFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStepOne({ stepOne });
    next();
    console.log("continue modal");
  };
  console.log(stepOne);
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
            <Button className="continue" onClick={handleSubmit}>
              Continue
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateContactStepOne;
