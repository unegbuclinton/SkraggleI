import React from "react";
import { Diamond, DonorContainer, DonorHeading, DonorWrapper } from "./styles";

function Donor() {
  return (
    <DonorWrapper>
      <DonorHeading>
        <h1 className="heading">Donor Score</h1>
      </DonorHeading>
      <DonorContainer>
        <Diamond>
          <p className="score">8.5</p>
        </Diamond>
        <p className="donor-info">
          Contact Insights are a way for you to gauge the level of engagement of
          this contact. Note: insights can take up to 24 hours to update.
        </p>
      </DonorContainer>
    </DonorWrapper>
  );
}

export default Donor;
