import React, { useState } from "react";
import Button from "components/atoms/Button/Button";
import Checkbox from "components/atoms/CheckBox";
import DropdownComponent from "components/atoms/Dropdown";
import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import { useFormik } from "formik";
import { fieldValidationSchema } from "validation/Schema";
import {
  ButtonContainer,
  Container,
  DropdownWrapper,
  ErrorMsg,
  FieldTypeWrapper,
  Label,
  SwitchWrapper,
} from "./styles";

function FieldDropdown({ setDropdown }) {
  const [selected, setSelected] = useState("Displayedlabel");
  const data = [
    {
      id: 1,
      name: "Displayedlabel",
    },
  ];

  const formik = useFormik({
    initialValues: {
      fieldLabel: "",
      reportLabel: "",
      fieldType: "",
    },
    validationSchema: fieldValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <DropdownWrapper onSubmit={formik.handleSubmit}>
      <Label>Field Label</Label>
      <Input
        className="normal-input"
        type="text"
        id="fieldLabel"
        name="fieldLabel"
        placeholder="Trial label"
        disabled
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fieldLabel}
      />
      {formik.touched.fieldLabel && formik.errors.fieldLabel ? (
        <ErrorMsg>{formik.errors.fieldLabel}</ErrorMsg>
      ) : null}

      <Label>Reporting Label</Label>
      <Input
        className="normal-input"
        type="text"
        id="reportLabel"
        name="reportLabel"
        placeholder="Displaylabel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.reportLabel}
      />
      {formik.touched.reportLabel && formik.errors.reportLabel ? (
        <ErrorMsg>{formik.errors.reportLabel}</ErrorMsg>
      ) : null}

      <FieldTypeWrapper>
        <div>
          <Label>Field Type</Label>
          <DropdownComponent
            className="field-type-dropdown"
            id="fieldType"
            name="fieldType"
            selected={selected}
            setSelected={setSelected}
            data={data}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fieldType}
          />
          {formik.touched.fieldType && formik.errors.fieldType ? (
            <ErrorMsg>{formik.errors.fieldType}</ErrorMsg>
          ) : null}
        </div>
        <div className="checkbox-container">
          <Checkbox className="checkbox" label="Required" />
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
