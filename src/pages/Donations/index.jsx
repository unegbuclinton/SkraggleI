import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import styled from 'styled-components';
import Admin from './Admin';
import Forcasting from './Forecasting';
import Pledge from './Pledges';
import Receipts from './Receipts';
import DonationRecurring from './Recurring';
import DonationsSummary from './Summary';
import Transaction from './Transaction';
const Donations = () => {
  const tabs = [
    { title: 'Summary', component: <DonationsSummary /> },
    { title: 'Forecasting', component: <Forcasting /> },
    { title: 'Transaction', component: <Transaction /> },
    { title: 'Recurring', component: <DonationRecurring /> },
    { title: 'Pledges', component: <Pledge /> },
    { title: 'Admin', component: <Admin /> },
    { title: 'Receipts', component: <Receipts /> }
  ];
  return (
    <DashboardLayout>
      <DonationsContainer>
        <Tabs tabs={tabs} scroll />
      </DonationsContainer>
    </DashboardLayout>
  );
};

export default Donations;

const DonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* gap: 1.6rem; */
`;
