import EmptyState from 'components/organisms/EmptyState';
import { DPIconVolunteeringEmpty } from 'icons';
import React from 'react';
import styled from 'styled-components';

function VolunteeringEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconVolunteeringEmpty />}
        title="No volunteering activity yet."
        name="Add activity"
        onClick={() => setOpen(true)}
        className="volunteering__empty-state"
      />
    </EmptyStateWrapper>
  );
}

export default VolunteeringEmptyState;

const EmptyStateWrapper = styled.div`
  height: 100%;
  .volunteering__empty-state {
    height: 100%;
  }
`;
