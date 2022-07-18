/* eslint-disable no-unused-vars */
import DashboardLayout from 'components/layouts/DashboardLayout';
import DashboardHeader from 'components/molecules/DashboardNavbar';
import OrganisationSettings from 'pages/OrganisationSettings';
import Account from 'pages/OrganisationSettings/Account';
import CustomField from 'pages/OrganisationSettings/CustomFields';
import Imports from 'pages/OrganisationSettings/Imports';
import Integrations from 'pages/OrganisationSettings/Integrations';
import PaymentProcessor from 'pages/OrganisationSettings/PaymentProcessors';
import Premium from 'pages/OrganisationSettings/Premium';
import Profile from 'pages/OrganisationSettings/Profile';
import ReceiptAndEmails from 'pages/OrganisationSettings/RecieptEmail';
import RestoreContacts from 'pages/OrganisationSettings/RestoreContacts';
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
      {/* <Imports /> */}
      {/* <Integrations /> */}
      {/* <PaymentProcessor /> */}
      {/* <Account /> */}
      {/* <Premium /> */}
      {/* <RestoreContacts /> */}
      <OrganisationSettings />
    </DashboardLayout>
  );
}

export default Test;
