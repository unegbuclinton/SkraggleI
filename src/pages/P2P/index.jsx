import React from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import P2PTable from "components/molecules/P2P/Tables/P2PFundraiserTable";
import P2PArchiveTable from "components/molecules/P2P/Tables/P2PArchiveTable";

const P2P = () => {
  const tabs = [
    {
      title: "P2P Fundraiser",
      component: <P2PTable />,
    },
    {
      title: "Archive",
      component: <P2PArchiveTable />,
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={tabs} />
    </DashboardLayout>
  );
};

export default P2P;
