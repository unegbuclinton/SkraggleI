import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import ProgressBar from "components/atoms/ProgressBar/ProgressBar";
import React from "react";
import { RevenueWrapper, DonationContainer, DonationWrapper } from "./styles";

function Donation() {
  return (
    <DonationContainer>
      <DonationWrapper>
        <Card className='progress-card'>
          <p className="donation-text">Donation Goals</p>
          <ProgressBar
          className="donation-progress"
          value={19540}
          target={500000}
          heading="Yearly Goal"
          raisedLabel="raised"
          targetLabel="Target"
        />
        </Card>
      </DonationWrapper>
      <RevenueWrapper>
        <Card>
          <p className="revenue-text">Revenue Goals</p>
          <div className="revenue-progress">
            <p className="revenue-progress__text">No revenue goals set yet</p>
            <Button action>Set Goals</Button>
          </div>
        </Card>
      </RevenueWrapper>
    </DonationContainer>
  );
}

export default Donation;
