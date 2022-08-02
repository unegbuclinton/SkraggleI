import PageLinks from 'components/atoms/PageLinks';
import DashboardLayout from 'components/layouts/DashboardLayout';
import FundraiserDetails from 'components/molecules/P2P/FundraiserDetails';
import Preview from 'components/molecules/P2P/Preview';
import Tabs from 'components/molecules/Tabs';
import { React } from 'react';
import { useSelector } from 'react-redux';

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

  const { eachP2p } = useSelector((state) => state?.p2p);

  const { fundraiser_display_name } = eachP2p;

  return (
    <DashboardLayout
      pageLinks={
        <PageLinks pageLinkBefore="P2P" to="/peer-to-peer" names={fundraiser_display_name} />
      }>
      <Tabs tabs={links} scroll />
    </DashboardLayout>
  );
};

export default P2PDetails;
