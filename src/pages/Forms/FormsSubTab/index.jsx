import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';

function FormsSubTab() {
  return (
    <DashboardLayout>
      <Tabs tabs title="Forms Name" heading="My awesome campaign" link="FUNYNYMGFTN" plainTab />
    </DashboardLayout>
  );
}

export default FormsSubTab;
