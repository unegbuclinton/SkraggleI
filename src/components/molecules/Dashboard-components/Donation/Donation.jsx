import Button from "components/atoms/Button/Button";
import ProgressBar from "components/atoms/ProgressBar/ProgressBar";
import React from "react";
import { RevenueWrapper, DonationContainer, DonationWrapper } from "./styles";

function Donation() {
  return (
    <DonationContainer>
      <DonationWrapper>
        <p className="donation-text">Donation Goals</p>
        <ProgressBar
          className="donation-progress"
          value={19540}
          target={500000}
          heading="Yearly Goal"
          raisedLabel="raised"
          targetLabel="Target"
        />
      </DonationWrapper>
      <RevenueWrapper>
        <p className="revenue-text">Revenue Goals</p>
        <div className="revenue-progress">
          <p className="revenue-progress__text">No revenue goals set yet</p>
          <Button action>Set Goals</Button>
        </div>
      </RevenueWrapper>
    </DonationContainer>
  );
}

export default Donation;
