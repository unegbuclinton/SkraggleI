import React from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import ActiveInactive from "./ActiveInactive";
import Archived from "./Archived";
import Settings from "./Settings";
import Wording from "./Wording";

function Events() {
  const links = [
    {
      title: "Active/Inactive",
      component: <ActiveInactive />,
    },
    {
      title: "Archived",
      component: <Archived />,
    },
    {
      title: "Settings",
      component: <Settings />,
    },
    {
      title: "Wording",
      component: <Wording />,
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
}

export default Events;
