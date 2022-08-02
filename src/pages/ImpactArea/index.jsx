import DashboardLayout from 'components/layouts/DashboardLayout';
import ImpactAreaTable from 'components/molecules/ImpactArea/Tables/ImpactAreaTable';
import Tabs from 'components/molecules/Tabs';
import React from 'react';

const ImpactArea = () => {
  const links = [
    {
      title: 'Impact Area',
      component: <ImpactAreaTable />
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={links} scroll />
    </DashboardLayout>
  );
};

export default ImpactArea;
