import React, { useState } from "react";
import {
  ButtonContainer,
  Label,
  LeftInputs,
  RightInputs,
  SettingsContainer,
  SettingsHeader,
  SettingsMessage,
  SettingsWrapper,
  SwitchHeaderWrapper,
  ErrorMsg,
} from "./styles";
import { DPIconCaretDown } from "icons";
import Switch from "components/atoms/Switch/Switch";
import Button from "components/atoms/Button/Button";
import { useFormik } from "formik";
import { generalSettingsValidationSchema } from "validation/Schema";
import Input from "components/atoms/Input/Input";

function Settings() {
  const [dropDown, setDropDown] = useState(false);
  const formik = useFormik({
    initialValues: {
      eventMessage: "",
      donationMessage: "",
      linkText: "",
    },
    validationSchema: generalSettingsValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
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
        <SettingsContainer onSubmit={formik.handleSubmit}>
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

              <Input
                className="left-input"
                type="text"
                id="eventMessage"
                name="eventMessage"
                placeholder="Join us for an upcoming event!"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.eventMessage}
              />
              {formik.touched.eventMessage && formik.errors.eventMessage ? (
                <ErrorMsg>{formik.errors.eventMessage}</ErrorMsg>
              ) : null}

              <Label>Donation Message</Label>
              <Input
                className="left-input"
                type="text"
                id="donationMessage"
                name="donationMessage"
                placeholder="Your support goes a long way."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.donationMessage}
              />
              {formik.touched.donationMessage &&
              formik.errors.donationMessage ? (
                <ErrorMsg>{formik.errors.donationMessage}</ErrorMsg>
              ) : null}

              <p className="info">
                Banner only display when there is at least one active event.
              </p>
            </LeftInputs>

            <RightInputs>
              <Label>Link Text</Label>
              <Input
                className="right-input"
                type="text"
                id="linkText"
                name="linkText"
                placeholder="See Events"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkText}
              />
              {formik.touched.linkText && formik.errors.linkText ? (
                <ErrorMsg>{formik.errors.linkText}</ErrorMsg>
              ) : null}

              <Label>Link Text</Label>
              <Input
                className="right-input"
                type="text"
                id="linkText"
                name="linkText"
                placeholder="Give Now"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkText}
              />
              {formik.touched.linkText && formik.errors.linkText ? (
                <ErrorMsg>{formik.errors.linkText}</ErrorMsg>
              ) : null}
            </RightInputs>
          </div>

          <ButtonContainer>
            <Button
              type="button"
              onClick={() => setDropDown(false)}
              className="cancel-btn"
            >
              Cancel
            </Button>
            <Button className="save-btn">Save</Button>
          </ButtonContainer>
        </SettingsContainer>
      )}
    </SettingsWrapper>
  );
}

export default Settings;
