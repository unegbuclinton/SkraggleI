import Tabs from 'components/atoms/Tabs';
import DashboardLayout from 'components/layouts/DashboardLayout';
import CampaignOverview from 'components/molecules/Campaign/OverviewComponent';
import ElementsTable from 'components/molecules/Campaign/Tables/ElementsTable';
import EventsTable from 'components/molecules/Campaign/Tables/EventsTable';
import FormsTable from 'components/molecules/Campaign/Tables/FormTable';
import LandingPagesTable from 'components/molecules/Campaign/Tables/LandingPagesTable';
import MailBlastTable from 'components/molecules/Campaign/Tables/MailBlastTable';
import P2PTable from 'components/molecules/Campaign/Tables/P2PTables';
import { React, useState } from 'react';

const CampaignDetails = () => {
  const links = [
    {
      path: '/campaign/*',
      label: 'Overview',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'Form',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'P2P',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'Elements',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'Events',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'Landing Page',
      exact: 'true',
    },
    {
      path: '/campaign/*',
      label: 'Mail Blasts',
      exact: 'true',
    },
  ];

  const [active, setActive] = useState(1);

  const handleActive = (e) => {
    setActive(Number(e.target.id));
  };
  return (
    <DashboardLayout>
      <Tabs
        data={links}
        active={active}
        onClick={handleActive}
        itemActive="link__item__active"
        normalLink="each__link"
      />

      {active === 1 && <CampaignOverview />}
      {active === 2 && <FormsTable />}
      {active === 3 && <P2PTable />}
      {active === 4 && <ElementsTable />}
      {active === 5 && <EventsTable />}
      {active === 6 && <LandingPagesTable />}
      {active === 7 && <MailBlastTable />}
    </DashboardLayout>
  );
};

export default CampaignDetails;
