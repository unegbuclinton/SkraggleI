import EmptyState from 'components/organisms/EmptyState';
import { DPIconWelfare } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ImpactAreaEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconWelfare />}
        title="No Companies List Yet"
        name="Create Your Company List"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default ImpactAreaEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
`;
