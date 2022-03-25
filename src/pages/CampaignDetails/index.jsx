import { React, useState } from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import { CampaignBody } from "./styles";

import FormsTable from "components/molecules/Campaign/Tables/FormTable";
import P2PTable from "components/molecules/Campaign/Tables/P2PTables";
import ElementsTable from "components/molecules/Campaign/Tables/ElementsTable";
import EventsTable from "components/molecules/Campaign/Tables/EventsTable";
import LandingPagesTable from "components/molecules/Campaign/Tables/LandingPagesTable";
import MailBlastTable from "components/molecules/Campaign/Tables/MailBlastTable";

import Tabs from "components/atoms/Tabs";
import CampaignOverview from "components/molecules/Campaign/OverviewComponent";

const CampaignDetails = () => {
  const links = [
    {
      label: "Overview",
    },
    {
      label: "Form",
    },
    {
      label: "P2P",
    },
    {
      label: "Elements",
    },
    {
      label: "Events",
    },
    {
      label: "Landing Page",
    },
    {
      label: "Mail Blasts",
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

      {active === 1 && <CampaignOverview />}
      {active === 2 && <FormsTable />}
      {active === 3 && <P2PTable />}
      {active === 4 && <ElementsTable />}
      {active === 5 && <EventsTable />}
      {active === 6 && <LandingPagesTable />}
      {active === 7 && <MailBlastTable />}
      
    </DashboardLayout>
  );
};

export default CampaignDetails;
