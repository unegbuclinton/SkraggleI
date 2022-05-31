import EmptyState from 'components/organisms/EmptyState';
import { DPIconChart } from 'icons';
import React from 'react';
import styled from 'styled-components';

function SegmentsEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconChart />}
        title="No Segments Yet"
        name="Create Your Segments"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default SegmentsEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
`;
