import React from "react";
import { ClickButton, Label, Form } from "./styles";

function Radio({ checkbox, label }) {
  return (
    <Form>
      <Label>
        <ClickButton checkbox={checkbox} />
        {label}
      </Label>
    </Form>
  );
}

export default Radio;
