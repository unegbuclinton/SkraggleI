import EmptyState from 'components/organisms/EmptyState';
import { DPIconActiveInactive } from 'icons';
import React from 'react';

function ActiveInactiveEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconActiveInactive />}
      contactTitle="No Events added Yet"
      onClick={() => setOpen(true)}
      name="Create new Event"
    />
  );
}

export default ActiveInactiveEmptyState;
