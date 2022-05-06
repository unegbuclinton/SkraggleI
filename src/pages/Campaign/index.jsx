import { React } from 'react';

import DashboardLayout from 'components/layouts/DashboardLayout';
import ArchiveTable from 'components/molecules/Campaign/Tables/ArchiveTable';
import CampaignTable from 'components/molecules/Campaign/Tables/CampaignTable';

import Tabs from 'components/molecules/Tabs';

const Campaign = () => {
  const tabs = [
    {
      title: 'Campaigns',
      component: <CampaignTable />
    },
    {
      title: 'Archive',
      component: <ArchiveTable />
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={tabs} />
    </DashboardLayout>
  );
};

export default Campaign;
