import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import ProgressBar from "components/atoms/ProgressBarNew";
import SetRevenueModal from "pages/modals/SetRevenueModal";
import React from "react";
import { useState } from "react";
import { RevenueWrapper, DonationContainer, DonationWrapper } from "./styles";

function Donation() {
  const [donations, setDonations] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <DonationContainer>
      <DonationWrapper>
        <Card className="progress-card">
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
            {donations.length === 0 ? (
              <p className="revenue-progress__text">
                No revenue goals set yet.
              </p>
            ) : (
              donations.map((value, target, duration) => (
                <ProgressBar
                  value={value}
                  target={target}
                  heading={duration}
                  raisedLabel="raised"
                  targetLabel="Target"
                  className="donation-progress"
                />
              ))
            )}

            <Button
              action
              onClick={() => {
                setOpen(true);
              }}
            >
              Set Goals
            </Button>
            {open && (
              <SetRevenueModal
                isShown={open}
                setValue={(values) => {
                  setDonations(values);
                }}
                onClose={() => {
                  setOpen(false);
                }}
              />
            )}
          </div>
        </Card>
      </RevenueWrapper>
    </DonationContainer>
  );
}

export default Donation;
