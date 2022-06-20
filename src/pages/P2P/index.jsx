import DashboardLayout from 'components/layouts/DashboardLayout';
import P2PArchiveTable from 'components/molecules/P2P/Tables/P2PArchiveTable';
import P2PTable from 'components/molecules/P2P/Tables/P2PFundraiserTable';
import Tabs from 'components/molecules/Tabs';
import React from 'react';

function P2P() {
  const tabs = [
    {
      title: 'P2P Fundraiser',
      component: <P2PTable />
    },
    {
      title: 'Archive',
      component: <P2PArchiveTable />
    }
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={tabs} scroll />
    </DashboardLayout>
  );
}

export default P2P;
