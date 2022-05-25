import EmptyState from 'components/organisms/EmptyState';
import { DPIconHouseHold } from 'icons';
import React from 'react';

function HouseHoldEmptyState({ setOpen }) {
  return (
    <EmptyState
      title="No Households List Yet"
      svg={<DPIconHouseHold />}
      name="Creat Your Household List"
      onClick={() => setOpen(true)}
    />
  );
}

export default HouseHoldEmptyState;
