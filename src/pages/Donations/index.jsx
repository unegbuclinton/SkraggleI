import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import styled from 'styled-components';
import DonationsSummary from './Summary';
import Pledge from './Pledges';
import Admin from './Admin';
import Receipts from './Receipts';

const Donations = () => {
  const tabs = [
    { title: 'Summary', component: <DonationsSummary /> },
    { title: 'Forecasting', component: <h2>Content Two renders here!</h2> },
    { title: 'Transaction', component: <h2>Content Three renders here!</h2> },
    { title: 'Recurring', component: <h2>Content Four renders here!</h2> },
    { title: 'Pledges', component: <Pledge/> },
    { title: 'Admin', component: <Admin/>},
    { title: 'Receipts', component: <Receipts/> },
  ];
  return (
    <DashboardLayout>
      <DonationsContainer>
        <Tabs tabs={tabs} />
      </DonationsContainer>
    </DashboardLayout>
  );
};

export default Donations;

const DonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1.6rem; */
`;
