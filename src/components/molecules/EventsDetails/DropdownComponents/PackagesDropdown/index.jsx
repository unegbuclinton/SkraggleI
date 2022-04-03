import React from "react";
import Input from "components/atoms/Input/Input";
import {
  ButtonContainer,
  DropDownWrapper,
  GenericText,
  InputWrapper,
  Label,
  RadioWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";
import Switch from "components/atoms/Switch/Switch";
import Button from "components/atoms/Button/Button";

function PackageDropdown({ setDropdown }) {
  return (
    <DropDownWrapper>
      <Label>Name</Label>
      <Input type="text" className="name-input" placeholder="Gift pack" />
      <Label>Description</Label>
      <div className="text-editor"></div>
      <SwitchWrapper className="maplink-container">
        <SwitchLabel>Enable map link</SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <InputWrapper>
        <div>
          <Label>Price</Label>
          <Input className="money-input" type="text" placeholder="$  15.00" />
        </div>
        <div>
          <Label>Direct cost</Label>
          <Input className="money-input" type="text" placeholder="$ 10.00" />
        </div>
      </InputWrapper>
      <SwitchWrapper>
        <SwitchLabel>Include an early bird discount</SwitchLabel>
        <Switch />
      </SwitchWrapper>
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
      <InputWrapper>
        <div>
          <Label>Discount percentage</Label>
          <Input className="discount-input" type="number" placeholder="10" />
        </div>

        <div>
          <Label>Early bird cutoff</Label>
          <Input className="date-time-input" type="date" />
        </div>

        <div>
          <Label>End time</Label>
          <Input className="date-time-input" type="time" />
        </div>
      </InputWrapper>
      <SwitchWrapper className="multiple-package-wrapper">
        <SwitchLabel>
          Adjust the per package price when punchasing multiple packages
        </SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <InputWrapper>
        <div className="input-container">
          <Label>Participants included</Label>
          <Input className="normal-input" type="number" placeholder="5" />
          <GenericText>
            How many participants are included in each package?
          </GenericText>
        </div>

        <div className="input-container">
          <Label>Number of packages</Label>
          <div className="unlimited-btn">Unlimited</div>
          <GenericText>
            How many of this package are available for purchase?
          </GenericText>
        </div>
      </InputWrapper>

      <InputWrapper>
        <div className="qty-container">
          <Label>Qty</Label>
          <Input className="normal-input" type="number" placeholder="5" />
          <GenericText>Per purchase. Cannot be greater than 100</GenericText>
        </div>

        <div className="qty-container">
          <Label>Pre-Selected package Qty</Label>
          <Input className="date-time-input" type="text" placeholder="5" />
          <GenericText>Cannot be greater than 100</GenericText>
        </div>
      </InputWrapper>
      <InputWrapper>
        <div className="custom-container">
          <Label className="custom-label">Custom event fields</Label>
          <div className="email-container"></div>
        </div>
      </InputWrapper>
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
    </DropDownWrapper>
  );
}

export default PackageDropdown;
