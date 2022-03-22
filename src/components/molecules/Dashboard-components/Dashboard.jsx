import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import AddedContact from "./AddedContact/AddedContact";
import Donation from "./Donation/Donation";
import FormResponse from "./FormResponse/FormResponse";
import GeneralUpdate from "./GeneralUpdate/GeneralUpdate";
import Membership from "./Membership/Membership";
import Overview from "./Overview/Overview";
import PotentialDonor from "./Potential/PotentialDonor";
import RecentTransaction from "./RecentTransaction/RecentTransaction";
import RecurringTransaction from "./RecurringTransaction/RecurringTransaction";
import ThankYou from "./Thankyou/ThankYou";
import UpcomingContact from "./UpcomingContact/UpcomingContact";

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
