/* eslint-disable no-unused-vars */
import DashboardLayout from 'components/layouts/DashboardLayout';
import DashboardHeader from 'components/molecules/DashboardNavbar';
import CustomField from 'pages/OrganisationSettings/CustomFields';
import Imports from 'pages/OrganisationSettings/Imports';
import Profile from 'pages/OrganisationSettings/Profile';
import ReceiptAndEmails from 'pages/OrganisationSettings/RecieptEmail';
import TeamMembers from 'pages/OrganisationSettings/Team';
import React from 'react';
function Test() {
  return (
    <DashboardLayout>
      {/* <DashboardHeader />
      <Profile />
      <TeamMembers />
      <CustomField /> */}
      {/* <ReceiptAndEmails /> */}
      <Imports />
    </DashboardLayout>
  );
}

export default Test;
