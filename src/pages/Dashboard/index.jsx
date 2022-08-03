import DashboardLayout from 'components/layouts/DashboardLayout';
// import { getAdminData } from 'features/auth/authSlice';
import { getAllCampaigns } from 'features/campaign/campaignSlice';
import {
  allHouseHold,
  getAllCompanies,
  // getAllTodos,
  viewContact,
  viewTags
} from 'features/contact/contactSlice';
import { getPledge } from 'features/donation/donationSlice';
import { getAllElements } from 'features/elements/elementsSlice';
import { getAllEvents } from 'features/events/eventSlice';
import { getAllForm } from 'features/forms/formsSlice';
import { viewP2P } from 'features/p2p/p2pSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllEvents());
    dispatch(getPledge());
    dispatch(allHouseHold());
    dispatch(viewTags());
    dispatch(viewContact());
    dispatch(viewP2P());
    dispatch(getAllCampaigns());
    dispatch(getAllForm());
    dispatch(getAllElements());
    // dispatch(getAdminData());
  }, []);
  return (
    <DashboardLayout section="Dashboard">
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
