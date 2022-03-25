import React, { useState } from "react";
import { TabLinksWrapper } from "./styles";
import ContactsTable from "components/molecules/Contacts/ContactsTable";
import { Link } from "react-router-dom";
import CompaniesTable from "components/molecules/Contacts/CompaniesTable";
import DashboardLayout from "components/layouts/DashboardLayout";
import HouseHoldsTable from "components/molecules/Contacts/HouseHoldsTable";
import TagsTable from "components/molecules/Contacts/TagsTable";
import SegmentsTable from "components/molecules/Contacts/SegmentsTable";
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
