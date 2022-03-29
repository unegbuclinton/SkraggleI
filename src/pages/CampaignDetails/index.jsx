import DashboardLayout from 'components/layouts/DashboardLayout';
import CampaignOverview from 'components/molecules/Campaign/OverviewComponent';
import ElementsTable from 'components/molecules/Campaign/Tables/ElementsTable';
import EventsTable from 'components/molecules/Campaign/Tables/EventsTable';
import FormsTable from 'components/molecules/Campaign/Tables/FormTable';
import LandingPagesTable from 'components/molecules/Campaign/Tables/LandingPagesTable';
import MailBlastTable from 'components/molecules/Campaign/Tables/MailBlastTable';
import P2PTable from 'components/molecules/Campaign/Tables/P2PTables';
import Tabs from 'components/molecules/Tabs';

import { React } from 'react';

const CampaignDetails = () => {
  const links = [
    {
      title: 'Overview',
      component: <CampaignOverview/>
    },
    {
      title: 'Form',
      component: <FormsTable/>
    },
    {
      title: 'P2P',
      component: <P2PTable/>
    },
    {
      title: 'Elements',
      component: <ElementsTable/>
    },
    {
      title: 'Events',
      component: <EventsTable/>
    },
    {
      title: 'Landing Page',
      component: <LandingPagesTable/>
    },
    {
      title: 'Mail Blasts',
      component: <MailBlastTable/>
    },
  ];
  return (
    <DashboardLayout>
      <Tabs
      tabs={links}
      />
    </DashboardLayout>
  );
};

export default CampaignDetails;