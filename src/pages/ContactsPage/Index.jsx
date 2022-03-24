import React, { useState } from "react";
import { TabLinksWrapper } from "./styles";
import ContactsTable from "components/molecules/Contacts/ContactsTable";
import { Link } from "react-router-dom";
import CompaniesTable from "components/molecules/Contacts/CompaniesTable";

import DashboardLayout from "components/layouts/DashboardLayout";

const Contacts = () => {
  const links = [
    {
      path: "contacts",
      label: "Contacts",
      exact: "true",
    },
    {
      path: "contact",
      label: "companies",
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
      <ContactsTable />
      {/* {active === 0 && <CompaniesTable />} */}
    </DashboardLayout>
  );
};

export default Contacts;
