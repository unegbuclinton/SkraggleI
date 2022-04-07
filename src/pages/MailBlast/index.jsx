import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React from "react";
import Archive from "./Archive";
import Mail from "./Mailblast";
import SavedTemplate from "./SavedTemplate";
import Setting from "./Settings";
import Subscription from "./Subscription";

function MailBlast() {
  const mail = [
    {
      title: "Mail Blasts",
      component: <Mail />,
    },
    {
      title: "Saved Templates",
      component: <SavedTemplate />,
    },
    {
      title: "Settings",
      component: <Setting />,
    },
    {
      title: "Subscription Status",
      component: <Subscription />,
    },

    {
      title: "Archive",
      component: <Archive />,
    },
   
  ];
  return (
    <DashboardLayout>
      <Tabs
        tabs={mail}
      />
    </DashboardLayout>
  );
}

export default MailBlast;
