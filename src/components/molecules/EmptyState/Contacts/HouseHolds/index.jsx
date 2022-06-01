import EmptyState from 'components/organisms/EmptyState';
import { DPIconHouseHold } from 'icons';
import React from 'react';
import styled from 'styled-components';

function HouseHoldEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        title="No Households List Yet"
        svg={<DPIconHouseHold />}
        name="Create Your Household List"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default HouseHoldEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
`;
