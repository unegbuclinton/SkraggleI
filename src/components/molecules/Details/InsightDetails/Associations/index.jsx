import React from "react";
import Button from "components/atoms/Button/Button";
import {
  AssociationContainer,
  AssociationHeading,
  AssociationWrapper,
} from "./styles";

function Association() {
  return (
    <AssociationWrapper>
      <AssociationHeading>
        <h1 className="heading">Association</h1>
        <Button className="heading-btn">Edit</Button>
      </AssociationHeading>
      <AssociationContainer>
        <h2 className="title">COMPANIES</h2>
        <p className="info name">Hanna Dandanell</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD</h2>
        <p className="info household">-</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD ROLE</h2>
        <p className="info role">-</p>
      </AssociationContainer>
    </AssociationWrapper>
  );
}

export default Association;
