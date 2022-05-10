import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import GoalProgressTracker from 'components/molecules/GoalProgressTracker';
import SetRevenueModal from 'pages/Dashboard/modals/SetRevenueModal';
import React, { useState } from 'react';
import { DonationContainer, DonationWrapper, RevenueWrapper } from './styles';

function Donation() {
  const [donations, setDonations] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <DonationContainer>
      <DonationWrapper>
        <Card className="progress-card">
          <p className="donation-text">Donation Goals</p>
          <div className="progress-tracker">
            <GoalProgressTracker heading="Yearly Goal" value={195400} target={500000} />
          </div>
        </Card>
      </DonationWrapper>
      <RevenueWrapper>
        <Card>
          <p className="revenue-text">Revenue Goals</p>
          <div className="revenue-progress">
            {donations.length === 0 ? (
              <p className="revenue-progress__text">No revenue goals set yet.</p>
            ) : (
              donations.map((value, target) => (
                <GoalProgressTracker key={value} value={value} target={target} />
              ))
            )}

            <Button
              action
              onClick={() => {
                setOpen(true);
              }}>
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
