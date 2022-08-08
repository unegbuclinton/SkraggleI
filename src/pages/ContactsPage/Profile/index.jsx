import DashboardLayout from 'components/layouts/DashboardLayout';
import InsightDetails from 'components/molecules/Details/InsightDetails';
import InteractionTable from 'components/molecules/Details/ProfileTables/InteractionTable';
import MembershipsTable from 'components/molecules/Details/ProfileTables/MembershipsTable';
import TodosTable from 'components/molecules/Details/ProfileTables/TodosTable';
import TransactionTable from 'components/molecules/Details/ProfileTables/TransactionTable';
import VolunteerTable from 'components/molecules/Details/ProfileTables/VolunteerTable';
import Tabs from 'components/molecules/Tabs';
import React from 'react';

function Profile() {
  const links = [
    {
      title: 'Profile',
      component: <InsightDetails />
    },
    {
      title: 'Interactions',
      component: <InteractionTable />
    },
    {
      title: 'To-Dos',
      component: <TodosTable />
    },
    {
      title: 'Transactions',
      component: <TransactionTable />
    },
    {
      title: 'Memberships',
      component: <MembershipsTable />
    },
    {
      title: 'Volunteering',
      component: <VolunteerTable />
    }
  ];
  return (
    <DashboardLayout section="Contact">
      <Tabs stickyTab tabs={links} scroll />
    </DashboardLayout>
  );
}

export default Profile;
