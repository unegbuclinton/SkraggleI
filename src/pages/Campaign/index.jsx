import { React, useState } from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import { CampaignBody } from "./styles";
import ArchiveTable from "components/molecules/Campaign/Tables/ArchiveTable";
import CampaignTable from "components/molecules/Campaign/Tables/CampaignTable";
import Tabs from "components/atoms/Tabs";

const Campaign = () => {
  const links = [
    {
      path: "/campaign",
      label: "Campaigns",
      // exact: "true",
    },
    {
      path: "/campaign",
      label: "Archive",
      // exact: "true",
    },
  ];

  const [active, setActive] = useState(1);

  const handleActive = (e) => {
    setActive(Number(e.target.id));
  };

  return (
    <DashboardLayout>
      <Tabs
        data={links}
        active={active}
        onClick={handleActive}
        itemActive="link__item__active"
        normalLink="each__link"
      />
      <CampaignBody>
        {active === 1 && <CampaignTable />}
        {active === 2 && <ArchiveTable />}
      </CampaignBody>
    </DashboardLayout>
  );
};

export default Campaign;
