import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React from "react";
import Mail from "./Mailblast";
import SavedTemplate from "./SavedTemplate";
import Setting from "./Settings";

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
      component: " Contacts",
    },
    {
      title: "Archive",
      component: "No Archive",
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={mail} />
    </DashboardLayout>
  );
}

export default MailBlast;
