import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import AddedContact from "./AddedContact";
import Donation from "./Donation";
import FormResponse from "./FormResponse";
import GeneralUpdate from "./GeneralUpdate";
import Membership from "./Membership";
import Overview from "./Overview";
import PotentialDonor from "./Potential";
import RecentTransaction from "./RecentTransaction";
import RecurringTransaction from "./RecurringTransaction";
import ThankYou from "./Thankyou/ThankYou";
import UpcomingContact from "./UpcomingContact";

function Dashboard() {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
}

export default Dashboard;
