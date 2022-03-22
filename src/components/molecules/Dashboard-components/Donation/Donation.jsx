import Button from "components/atoms/Button/Button";
import React from "react";
import { RevenueWrapper, DonationContainer, DonationWrapper } from "./styles";

function Donation() {
  return (
    <DonationContainer>
      <DonationWrapper>
        <p className="donation-text">Donation Goals</p>
        <div className="donation-progress">

        </div>
      </DonationWrapper>
      <RevenueWrapper>
        <p className="revenue-text">Revenue Goals</p>
        <div className="revenue-progress">
            <p className="revenue-progress__text">
                No revenue goals set yet
            </p>
            <Button action>
                Set Goals
            </Button>
        </div>
      </RevenueWrapper>
    </DonationContainer>
  );
}

export default Donation;
