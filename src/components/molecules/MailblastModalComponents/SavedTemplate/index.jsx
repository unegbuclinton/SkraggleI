import Card from "components/atoms/Card";
import React from "react";
import { SavedWrapper } from "./styles";

function SavedTemplate() {
  return (
    <SavedWrapper>
      <Card className ="saved-card">
        <p>No record To Show </p>
      </Card>
    </SavedWrapper>
  );
}

export default SavedTemplate;
