import EmptyState from 'components/organisms/EmptyState';
import { DPIconArchived } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ArchivedEmptyState({ setOpen }) {
  return (
    <ArchivedWrapper>
      <EmptyState
        svg={<DPIconArchived className="archived-icon" />}
        contactTitle="No Events added Yet"
        onClick={() => setOpen(true)}
        name="Add Event"
      />
    </ArchivedWrapper>
  );
}

export default ArchivedEmptyState;

const ArchivedWrapper = styled.div`
  .archived-icon {
    width: 15rem;
  }
`;
