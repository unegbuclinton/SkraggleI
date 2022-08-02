import EmptyState from 'components/organisms/EmptyState';
import { DPIconVolunteerForm } from 'icons';
import React from 'react';
import styled from 'styled-components';

function FormsEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconVolunteerForm />}
        title="No Form Yet"
        name="Create  New Form"
        onClick={() => setOpen(true)}
        className="volunteering__empty-state"
      />
    </EmptyStateWrapper>
  );
}

export default FormsEmptyState;

const EmptyStateWrapper = styled.div`
  height: 100%;
  .volunteering__empty-state {
    height: 100%;
  }
`;
