import EmptyState from 'components/organisms/EmptyState';
import { DPIconPhone } from 'icons';
import React from 'react';
import styled from 'styled-components';

function RestoreContactEmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyState svg={<DPIconPhone />} restore title="No deleted contacts found." />
    </EmptyStateWrapper>
  );
}

export default RestoreContactEmptyState;
const EmptyStateWrapper = styled.div`
  margin-top: 1.6rem;
`;
