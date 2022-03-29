import React, { useState } from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import {
  ButtonContainer,
  FormInput,
  Label,
  LeftInputs,
  RightInputs,
  SettingsContainer,
  SettingsHeader,
  SettingsMessage,
  SettingsWrapper,
  SwitchHeaderWrapper,
} from "./styles";
import { DPIconCaretDown } from "icons";
import Switch from "components/atoms/Switch/Switch";
import Button from "components/atoms/Button/Button";

function Settings() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <DashboardLayout>
      <SettingsWrapper>
        <SettingsHeader>
          <h1 onClick={() => setDropDown(!dropDown)} className="heading">
            General Settings
          </h1>
          <DPIconCaretDown
            className="icon"
            onClick={() => setDropDown(!dropDown)}
          />
        </SettingsHeader>
        {dropDown && (
          <SettingsContainer>
            <SettingsMessage>
              <SwitchHeaderWrapper>
                <h1 className="form-heading">Enable event banner</h1>
                <div className="switch">
                  <Switch />
                </div>
              </SwitchHeaderWrapper>
              <p className="message">
                We recommend keeping your message short and sweet.
              </p>
            </SettingsMessage>
            <div className="input-container">
              <LeftInputs>
                <Label>Events Message</Label>

                <FormInput
                  type="text"
                  placeholder="Join us for an upcoming event!"
                />
                <Label>Donation Message</Label>
                <FormInput
                  className="left-input"
                  type="text"
                  placeholder="Your support goes a long way."
                />
                <p className="info">
                  Banner only display when there is at least one active event.
                </p>
              </LeftInputs>

              <RightInputs>
                <Label>Link Text</Label>
                <FormInput
                  className="right-input"
                  type="text"
                  placeholder="See Events"
                />
                <Label>Link Text</Label>
                <FormInput
                  className="right-input"
                  type="text"
                  placeholder="Give Now"
                />
              </RightInputs>
            </div>

            <ButtonContainer>
              <Button
                type="button"
                onClick={() => setDropDown(false)}
                className="cancel-btn"
              >
                {" "}
                Cancel
              </Button>
              <Button className="save-btn">Save</Button>
            </ButtonContainer>
          </SettingsContainer>
        )}
      </SettingsWrapper>
    </DashboardLayout>
  );
}

export default Settings;
