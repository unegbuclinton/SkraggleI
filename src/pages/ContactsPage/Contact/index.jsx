import React, { useState } from "react";
import { TabLinksWrapper } from "./styles";
import ContactsTable from "components/molecules/Contacts/ContactsTable";
import { Link } from "react-router-dom";
import CompaniesTable from "components/molecules/Contacts/CompaniesTable";
import DashboardLayout from "components/layouts/DashboardLayout";
import HouseHoldsTable from "components/molecules/Contacts/HouseHoldsTable";
import TagsTable from "components/molecules/Contacts/TagsTable";
import SegmentsTable from "components/molecules/Contacts/SegmentsTable";

const Contacts = () => {
  const links = [
    {
      path: "/contacts",
      label: "Contact",
      exact: "true",
    },
    {
      path: "/contacts",
      label: "companies",
      exact: "true",
    },
    {
      path: "/contacts",
      label: "household",
      exact: "true",
    },
    {
      path: "/contacts",
      label: "tags",
      exact: "true",
    },
    {
      path: "/contacts",
      label: "segment",
      exact: "true",
    },
  ];

  const [active, setActive] = useState(0);

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
      {active === 0 && <ContactsTable />}
      {active === 1 && <CompaniesTable />}
      {active === 2 && <HouseHoldsTable />}
      {active === 3 && <TagsTable />}
      {active === 4 && <SegmentsTable />}
    </DashboardLayout>
  );
};

export default Contacts;
