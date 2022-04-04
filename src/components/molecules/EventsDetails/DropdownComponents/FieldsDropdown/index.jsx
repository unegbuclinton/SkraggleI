import Button from "components/atoms/Button/Button";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import {
  ButtonContainer,
  Container,
  DropdownWrapper,
  FieldTypeWrapper,
  Label,
  SwitchWrapper,
} from "./styles";

function FieldDropdown({ setDropdown }) {
  const data = [
    {
      id: 1,
      name: "Displayedlabel",
    },
  ];
  return (
    <DropdownWrapper>
      <Label>Field Label</Label>
      <Input
        className="normal-input"
        type="text"
        placeholder="Trial label"
        disabled
      />
      <Label>Reporting Label</Label>
      <Input
        className="normal-input"
        type="text"
        placeholder="Displaylabel"
        disabled
      />
      <FieldTypeWrapper>
        <div>
          <Label>Field Type</Label>
          <CustomDropdown className="field-type-dropdown" data={data} />
        </div>
        <div className="checkbox-container">
          <Input className="checkbox" type="checkbox" />
          <p>Required</p>
        </div>
      </FieldTypeWrapper>
      <Label>Maximum Characters</Label>
      <div className="max-character">Unlimited</div>
      <SwitchWrapper>
        <p>Show this field on a separate line</p>
        <Switch />
      </SwitchWrapper>
      <SwitchWrapper>
        <p>Event Wide Field</p>
        <Switch />
      </SwitchWrapper>
      <Container>
        <h2>Associate Field With Specific Package(s)</h2>
        <div className="pack-container"></div>
      </Container>
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

export default FieldDropdown;
