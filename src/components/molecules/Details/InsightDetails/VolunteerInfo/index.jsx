import React from "react";
import Button from "components/atoms/Button/Button";
import {
  VolunteerContainer,
  VolunteerHeading,
  VolunteerWrapper,
} from "./styles";

function VolunteerInfo() {
  return (
    <VolunteerWrapper>
      <VolunteerHeading>
        <h1 className="heading">Volunteer Information</h1>
        <Button className="heading-btn">Edit</Button>
      </VolunteerHeading>
      <VolunteerContainer>
        <h2 className="title">T-SHIRT SIZE</h2>
        <p className="info size">M</p>
      </VolunteerContainer>
    </VolunteerWrapper>
  );
}

export default VolunteerInfo;
