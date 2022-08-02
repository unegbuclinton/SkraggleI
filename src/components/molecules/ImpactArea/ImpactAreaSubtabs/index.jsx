import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import VolunteerForms from './Forms/index.jsx';
import Fundraising from './Fundraising/index.jsx';
import ReceiptsLetters from './ReceiptsLetters/index.jsx';
import Volunteering from './Volunteering/index.jsx';

function ImpactAreaSubtabs() {
  const tabs = [
    {
      title: 'Fundraising',
      component: <Fundraising />
    },
    {
      title: 'Volunteering',
      component: <Volunteering />
    },
    {
      title: 'Form',
      component: <VolunteerForms />
    },
    {
      title: 'Receipt & Letters',
      component: <ReceiptsLetters />
    }
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={tabs} scroll />
    </DashboardLayout>
  );
}

export default ImpactAreaSubtabs;
