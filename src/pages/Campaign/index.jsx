import { React } from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import ArchiveTable from "components/molecules/Campaign/Tables/ArchiveTable";
import CampaignTable from "components/molecules/Campaign/Tables/CampaignTable";
import Tab from "components/molecules/Tab";

const Campaign = () => {
  const tabs = [
    {
      title: "Campaigns",
      component: <CampaignTable/>
    },
    {
      title: "Archive",
      component: <ArchiveTable/>
    },
  ];

  return (
    <DashboardLayout>
      <Tab
      tabs={tabs}
      />
    </DashboardLayout>
  );
};

export default Campaign;
