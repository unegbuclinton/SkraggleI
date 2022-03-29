import Button from "components/atoms/Button/Button";
import React from "react";
import {
  ButtonContainer,
  FormContainer,
  FormInput,
  FormLabel,
  ModalContainer,
  ModalWrapper,
} from "./styles";

function CraeteNewHouseHold({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer>
          <FormLabel>NAME</FormLabel>
          <FormInput type="text" placeholder=" Name" />

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

export default CraeteNewHouseHold;