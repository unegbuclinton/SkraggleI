import PageLinks from 'components/atoms/PageLinks';
import DashboardLayout from 'components/layouts/DashboardLayout';
import ElementsOverview from 'components/molecules/Campaign/ElementsOverview';
import EventsOverview from 'components/molecules/Campaign/EventsOverview';
import FormsOverview from 'components/molecules/Campaign/FormsOverview';
import LandingPagesOverview from 'components/molecules/Campaign/LandingPagesOverview';
import MailblastOverview from 'components/molecules/Campaign/MailblastOverview';
import CampaignOverview from 'components/molecules/Campaign/OverviewComponent';
import P2POverview from 'components/molecules/Campaign/P2POverview';
import Tabs from 'components/molecules/Tabs';
import { React } from 'react';
import { useSelector } from 'react-redux';

const CampaignDetails = () => {
  const links = [
    {
      title: 'Overview',
      component: <CampaignOverview />
    },
    {
      title: 'Form',
      component: <FormsOverview />
    },
    {
      title: 'P2P',
      component: <P2POverview />
    },
    {
      title: 'Elements',
      component: <ElementsOverview />
    },
    {
      title: 'Events',
      component: <EventsOverview />
    },
    {
      title: 'Landing Page',
      component: <LandingPagesOverview />
    },
    {
      title: 'Mail Blasts',
      component: <MailblastOverview />
    }
  ];

  const { campaignByID } = useSelector((state) => state.campaign);
  const { name } = campaignByID;

  return (
    <DashboardLayout
      pageLinks={<PageLinks pageLinkBefore="Campaign" to="/campaign" names={name} />}>
      <Tabs tabs={links} scroll />
    </DashboardLayout>
  );
};

export default CampaignDetails;
