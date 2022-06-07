import EmptyState from 'components/organisms/EmptyState';
import { DPIconArchived } from 'icons';
import React from 'react';

function ArchivedEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconArchived />}
      contactTitle="No Events added Yet"
      onClick={() => setOpen(true)}
      name="Add Event"
    />
  );
}

export default ArchivedEmptyState;
