import React from 'react';
import ContactsTable from 'pages/ContactsPage/Contacts/ContactsTable';
import CompaniesTable from 'pages/ContactsPage/Companies/CompaniesTable';
import DashboardLayout from 'components/layouts/DashboardLayout';
import HouseHoldsTable from 'pages/ContactsPage/HouseHold/HouseHoldsTable';
import TagsTable from 'pages/ContactsPage/Tags/TagsTable';
import SegmentsTable from 'pages/ContactsPage/Segments/SegmentsTable';
import Tabs from 'components/molecules/Tabs';

const Contacts = () => {
  const links = [
    {
      title: 'Contact',
      component: <ContactsTable />
    },
    {
      title: 'companies',
      component: <CompaniesTable />
    },
    {
      title: 'household',
      component: <HouseHoldsTable />
    },
    {
      title: 'tags',
      component: <TagsTable />
    },
    {
      title: 'segment',
      component: <SegmentsTable />
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
};

export default Contacts;
