import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import PageLinks from 'components/atoms/PageLinks';
import FundraiserDetails from 'components/molecules/P2P/FundraiserDetails';
import Preview from 'components/molecules/P2P/Preview';

import { React } from 'react';
import { useLocation } from 'react-router-dom';

const P2PDetails = () => {
  const links = [
    {
      title: 'Setup',
      component: <FundraiserDetails />
    },
    {
      title: 'Preview',
      component: <Preview />
    }
  ];

  const name = useLocation().state.campaign;

  return (
    <DashboardLayout pageLinks={<PageLinks pageLinkBefore="P2P" to="/peer-to-peer" names={name} />}>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
};

export default P2PDetails;
