import DashboardLayout from 'components/layouts/DashboardLayout';
import React from 'react';
import styled from 'styled-components';
import AddedContact from './AddedContact';
import Donation from './Donation';
import FormResponse from './FormResponse';
import GeneralUpdate from './GeneralUpdate';
import Membership from './Membership';
import Overview from './Overview';
import PotentialDonor from './Potential';
import RecentTransaction from './RecentTransaction';
import RecurringTransaction from './RecurringTransaction';
import ThankYou from './Thankyou';
import UpcomingContact from './UpcomingContact';

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <Overview />
        <GeneralUpdate />
        <ThankYou />
        <RecentTransaction />
        <PotentialDonor />
        <Membership />
        <Donation />
        <UpcomingContact />
        <AddedContact />
        <FormResponse />
        <RecurringTransaction />
      </DashboardWrapper>
    </DashboardLayout>
  );
}

export default Dashboard;

export const DashboardWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;
