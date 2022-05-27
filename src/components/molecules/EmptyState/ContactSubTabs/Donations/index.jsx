import EmptyState from 'components/organisms/EmptyState';
import { DPIconSubDonation } from 'icons';
import React from 'react';

function DonationSubTabEmptyState(setOpen) {
  return (
    <EmptyState
      svg={<DPIconSubDonation />}
      contactTitle="No Donation added Yet"
      name="Add Donation"
      onClick={() => setOpen(true)}
    />
  );
}

export default DonationSubTabEmptyState;
