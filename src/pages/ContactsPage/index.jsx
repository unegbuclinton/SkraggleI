import React, { useState } from "react";
import { TabLinksWrapper } from "./styles";
import ContactsTable from "pages/ContactsPage/Contacts/ContactsTable";
import { Link } from "react-router-dom";
import CompaniesTable from "pages/ContactsPage/Companies/CompaniesTable";
import DashboardLayout from "components/layouts/DashboardLayout";
import HouseHoldsTable from "pages/ContactsPage/HouseHold/HouseHoldsTable";
import TagsTable from "pages/ContactsPage/Tags/TagsTable";
import SegmentsTable from "pages/ContactsPage/Segments/SegmentsTable";
import Tab from "components/molecules/Tab";

const Contacts = () => {
  const links = [
    {
      title: "Contact",
      component: <ContactsTable />,
    },
    {
      title: "companies",
      component: <CompaniesTable />,
    },
    {
      title: "household",
      component: <HouseHoldsTable />,
    },
    {
      title: "tags",
      component: <TagsTable />,
    },
    {
      title: "segment",
      component: <SegmentsTable />,
    },
  ];

  return (
    <DashboardLayout>
      <TabLinksWrapper>
        <Tab tabs={links} />
      </TabLinksWrapper>
    </DashboardLayout>
  );
};

export default Contacts;
