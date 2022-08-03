import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Archive from './Archive';
import FormsTable from './FormsTable';

const Forms = () => {
  const links = [
    {
      title: 'Forms',
      component: <FormsTable />
    },
    {
      title: 'Archive',
      component: <Archive />
    }
  ];

  return (
    <DashboardLayout section="Forms">
      <Tabs tabs={links} />
    </DashboardLayout>
  );
};

export default Forms;
