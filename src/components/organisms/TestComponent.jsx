import DashboardLayout from 'components/layouts/DashboardLayout';
import React from 'react';
import AreaChart from './AreaChart';

const TestComponent = () => {
  const testData = [30, 30, 405, 350, 300, 130, 100, 391];
  const categories = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <DashboardLayout>
      <AreaChart data={testData} categories={categories} />
    </DashboardLayout>
  );
};

export default TestComponent;
