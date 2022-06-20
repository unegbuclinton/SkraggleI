import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import { allSubscriptionStatus } from 'features/mailblast/mailBlastSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Archive from './Archive';
import Mail from './Mailblast';
import SavedTemplate from './SavedTemplate';
import Setting from './Settings';
import Subscription from './Subscription';

function MailBlast() {
  const dispatch = useDispatch();
  const mail = [
    {
      title: 'Mail Blasts',
      component: <Mail />
    },
    {
      title: 'Saved Templates',
      component: <SavedTemplate />
    },
    {
      title: 'Settings',
      component: <Setting />
    },
    {
      title: 'Subscription Status',
      component: <Subscription />
    },

    {
      title: 'Archive',
      component: <Archive />
    }
  ];

  useEffect(() => {
    dispatch(allSubscriptionStatus());
  });
  return (
    <DashboardLayout>
      <Tabs tabs={mail} scroll />
    </DashboardLayout>
  );
}

export default MailBlast;
