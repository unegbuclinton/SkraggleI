import React from "react";
import Input from "components/atoms/Input/Input";
import {
  ButtonContainer,
  Container,
  DropdownWrapper,
  InputWrapper,
  Label,
  RadioWrapper,
  SelectContainer,
} from "./styles";
import Button from "components/atoms/Button/Button";

function PromoCodeDropdown({ setDropdown }) {
  return (
    <DropdownWrapper>
      <InputWrapper>
        <div>
          <Label>Promo code</Label>
          <Input
            className="normal-input"
            type="text"
            placeholder="Save15"
            disabled
          />
          <Label>Note: Max 30 charaters. Must only letters and numbers.</Label>
        </div>
        <div>
          <Label>Description</Label>
          <Input
            disabled
            className="normal-input"
            type="text"
            placeholder="test"
          />
        </div>
      </InputWrapper>
      <RadioWrapper>
        <div className="radio-container">
          <Input type="radio" className="radio" />
          <p>Amount</p>
        </div>

        <div className="radio-container">
          <Input type="radio" className="radio" />
          <p>Percentage</p>
        </div>
      </RadioWrapper>
      <Container className="container">
        <div>
          <Label>Discount</Label>
          <Input
            className="discount-input"
            type="number"
            placeholder="15"
            disabled
          />
        </div>
        <div>
          <Label>Maximum users</Label>
          <Input
            className="maxuser-date-input"
            type="number"
            placeholder="1"
            disabled
          />
          <p className="max-label">
            How many of this promo code can be used per event?
          </p>
        </div>
      </Container>
      <Container>
        <div>
          <Label>Start date</Label>
          <Input className="maxuser-date-input" type="date" />
        </div>
        <div>
          <Label>End date</Label>
          <Input className="maxuser-date-input" type="date" />
        </div>
      </Container>
      <SelectContainer>
        <h2>This promo code will be applied to all packages or Select all</h2>
        <Input className="select-box" placeholder="Select some Options " />
      </SelectContainer>
      <ButtonContainer>
        <Button
          type="button"
          onClick={() => setDropdown(false)}
          className="cancel-btn"
        >
          Cancel
        </Button>
        <Button className="save-btn">Save</Button>
      </ButtonContainer>
    </DropdownWrapper>
  );
}

export default PromoCodeDropdown;
