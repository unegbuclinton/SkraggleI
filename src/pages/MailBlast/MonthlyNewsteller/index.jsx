import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React from "react";
import MailContent from "../Content";
import Overview from "../Overview";

function MonthlyNewsteller() {
  const mail = [
    {
      title: "Overview",
      component: <Overview />,
    },
    {
      title: "Content",
      component: <MailContent />,
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={mail} />
    </DashboardLayout>
  );
}

export default MonthlyNewsteller;
