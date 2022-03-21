import React from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import Nav from "../CampaignDetails/Nav/Nav";


const Campaign = () => {
  const links = [
    {
      path: "/campaign",
      label: "Campaigns",
      exact: "true",
    },
    {
      path: "/archive",
      label: "Archive",
      exact: "true",
    }
  ];
  
  return (
    <DashboardLayout>
        <Nav links={links} ></Nav>
    </DashboardLayout>

  );
};

export default Campaign;
