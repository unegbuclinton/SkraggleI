import DashboardLayout from 'components/layouts/DashboardLayout';
import React from 'react';
import ElementTable from './ElementTable/ElementTable';

function Elements() {
  return (
    <DashboardLayout section="Elements">
      <ElementTable />
    </DashboardLayout>
  );
}

export default Elements;
