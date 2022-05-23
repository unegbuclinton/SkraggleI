import EmptyState from 'components/organisms/EmptyState';
import { DPIconMembership } from 'icons';
import React from 'react';

function ContactEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconMembership />}
      contactTitle="No Contact List Yet"
      name="Creat Your Contact"
      onClick={() => setOpen(true)}
    />
  );
}

export default ContactEmptyState;
