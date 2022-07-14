import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import CompaniesTable from 'pages/ContactsPage/Companies/CompaniesTable';
import ContactsTable from 'pages/ContactsPage/Contacts/ContactsTable';
import HouseHoldsTable from 'pages/ContactsPage/HouseHold/HouseHoldsTable';
import SegmentsTable from 'pages/ContactsPage/Segments/SegmentsTable';
import TagsTable from 'pages/ContactsPage/Tags/TagsTable';
import React from 'react';

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
    },
    {
      title: 'Archived',
      children: [
        {
          name: 'Archived Contact'
        },
        {
          name: 'Deleted Contact'
        }
      ]
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
};

export default Contacts;
