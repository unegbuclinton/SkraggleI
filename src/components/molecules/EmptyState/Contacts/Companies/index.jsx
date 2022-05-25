import EmptyState from 'components/organisms/EmptyState';
import { DPIiconCompanies } from 'icons';
import React from 'react';

function CompaniesEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIiconCompanies />}
      title="No Companies List Yet"
      name="Creat Your Company List"
      onClick={() => setOpen(true)}
    />
  );
}

export default CompaniesEmptyState;
