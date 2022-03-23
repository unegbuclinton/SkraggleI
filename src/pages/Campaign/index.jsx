import { React, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "components/layouts/DashboardLayout";
import { TabLinksWrapper, CampaignBody } from "./styles";
import ArchiveTable from "components/molecules/Campaign/Tables/ArchiveTable";
import CampaignTable from "components/molecules/Campaign/Tables/CampaignTable";

const Campaign = () => {
  const links = [
    {
      path: "/campaign",
      label: "Campaigns",
      exact: "true",
    },
    {
      path: "/campaign",
      label: "Archive",
      exact: "true",
    },
  ];

  const [active, setActive] = useState(false);

  const fireActive = (index) => {
    setActive(index);
    console.log(index);
  };
  return (
    <DashboardLayout>
      <TabLinksWrapper>
        {links.map((link, index) => (
          <Link
            onClick={() => {
              fireActive(index);
            }}
            className={index === active ? "link__item__active" : "each__link"}
            to={link.path}
          >
            {link.label}
          </Link>
        ))}
      </TabLinksWrapper>

      <CampaignBody>
        {active === 0 && <CampaignTable />}
        {active === 1 && <ArchiveTable />}
      </CampaignBody>
    </DashboardLayout>
  );
};

export default Campaign;
