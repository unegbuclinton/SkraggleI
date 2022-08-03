import { React, useEffect } from 'react';

import DashboardLayout from 'components/layouts/DashboardLayout';
import ArchiveTable from 'components/molecules/Campaign/Tables/ArchiveTable';
import CampaignTable from 'components/molecules/Campaign/Tables/CampaignTable';

import Tabs from 'components/molecules/Tabs';
import { archivedCampaigns } from 'features/campaign/campaignSlice';
import { useDispatch } from 'react-redux';

const Campaign = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(archivedCampaigns());
  });
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
    <DashboardLayout section="Campiagns">
      <Tabs tabs={tabs} />
    </DashboardLayout>
  );
};

export default Campaign;
