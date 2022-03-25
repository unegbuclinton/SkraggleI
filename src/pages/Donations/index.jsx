import Tab from 'components/atoms/Tab';
import DashboardLayout from 'components/layouts/DashboardLayout';
import React from 'react';

const Donations = () => {
  const tabs = [
    { title: 'Summary', component: <h2>Content One renders here!</h2> },
    { title: 'Forecasting', component: <h2>Content Two renders here!</h2> },
    { title: 'Transaction', component: <h2>Content Three renders here!</h2> },
    { title: 'Recurring', component: <h2>Content Four renders here!</h2> },
    { title: 'Pledges', component: <h2>Content Three renders here!</h2> },
    { title: 'Admin', component: <h2>Content Three renders here!</h2> },
    { title: 'Receipts', component: <h2>Content Three renders here!</h2> },
  ];
  return (
    <DashboardLayout>
      <Tab tabs={tabs} />
    </DashboardLayout>
  );
};

export default Donations;
