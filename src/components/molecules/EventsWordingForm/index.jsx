import React from "react";
import Button from "components/atoms/Button/Button";
import { Container } from "./styles";
import Input from "components/atoms/Input/Input";

function EventsForm() {
  return (
    <Container>
      <Input className="input-field" />
      <div className="button-container">
        <Button className="btn-save">Save</Button>
        <Button className="btn-cancel">Cancel</Button>
      </div>
    </Container>
  );
}

export default EventsForm;
