import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import PageLinks from 'components/atoms/PageLinks';
import FundraiserDetails from 'components/molecules/P2P/FundraiserDetails';

import { React } from 'react';

const P2PDetails = () => {
  const links = [
    {
      title: 'Setup',
      component: <FundraiserDetails/>
    },
    {
      title: 'Preview',
      component: <div>Hello</div> 
    },
  ];

  return (
    <DashboardLayout pageLinks={<PageLinks pageLinkBefore="P2P" />} >
      <Tabs
      tabs={links}
      />
    </DashboardLayout>
  );
};

export default P2PDetails;
