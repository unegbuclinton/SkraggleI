import React from 'react';

function PackagesEmptyState() {
  return (
    <EmptyState
      svg={<DPIconActiveInactive />}
      contactTitle="No Events added Yet"
      onClick={() => setOpen(true)}
      name="Create new Event"
    />
  );
}

export default PackagesEmptyState;
