import EmptyState from 'components/organisms/EmptyState';
import { DPIiconCompanies } from 'icons';
import React from 'react';
import styled from 'styled-components';

function CompaniesEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIiconCompanies />}
        title="No Companies List Yet"
        name="Create Your Company List"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default CompaniesEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
`;
