import EmptyState from 'components/organisms/EmptyState';
import { DPIconEmtyState } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ContactEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconEmtyState className="icon" />}
        contactTitle="No Contact List Yet"
        name="Create Your Contact"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default ContactEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
  .icon {
    margin-bottom: 1.6rem;
  }
`;
