import EmptyState from 'components/organisms/EmptyState';
import { DPIconSubVolunteer } from 'icons';
import React from 'react';
function SubvolunteerEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconSubVolunteer />}
      contactTitle="No Volunteering activity added Yet"
      name="Add Activity"
      onClick={() => setOpen(true)}
    />
  );
}

export default SubvolunteerEmptyState;
