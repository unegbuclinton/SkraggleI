import DashboardLayout from 'components/layouts/DashboardLayout';
import ReportsMain from 'components/molecules/Reports';
import React from 'react';

function Reports() {
  return (
    <DashboardLayout section="Report">
      <ReportsMain></ReportsMain>
    </DashboardLayout>
  );
}

export default Reports;
