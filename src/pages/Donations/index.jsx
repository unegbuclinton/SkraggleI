import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React from "react";
import styled from "styled-components";
import Forcasting from "./Forecasting";
import DonationRecurring from "./Recurring";
import DonationsSummary from "./Summary";
import Transaction from "./Transaction";

const Donations = () => {
  const tabs = [
    { title: "Summary", component: <DonationsSummary /> },
    { title: "Forecasting", component: <Forcasting /> },
    { title: "Transaction", component: <Transaction /> },
    { title: "Recurring", component: <DonationRecurring /> },
    { title: "Pledges", component: <h2>Content Five renders here!</h2> },
    { title: "Admin", component: <h2>Content Six renders here!</h2> },
    { title: "Receipts", component: <h2>Content Seven renders here!</h2> },
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
