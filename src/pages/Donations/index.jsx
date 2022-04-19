import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React from "react";
import styled from "styled-components";
import Forcasting from "./Forecasting";
import DonationRecurring from "./Recurring";
import DonationsSummary from "./Summary";
import Transaction from "./Transaction";
import Pledge from "./Pledges";
import Admin from "./Admin";
import Receipts from "./Receipts";

const Donations = () => {
  const tabs = [
    { title: "Summary", component: <DonationsSummary /> },
    { title: "Forecasting", component: <Forcasting /> },
    { title: "Transaction", component: <Transaction /> },
    { title: "Recurring", component: <DonationRecurring /> },
    { title: "Pledges", component: <Pledge /> },
    { title: "Admin", component: <Admin /> },
    { title: "Receipts", component: <Receipts /> },
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
