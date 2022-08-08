import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Account from './Account';
import Integrations from './Integrations';
import PaymentProcessor from './PaymentProcessors';
import Premium from './Premium';
import Profile from './Profile';
import ReceiptAndEmails from './RecieptEmail';
import RestoreContacts from './RestoreContacts';
import TeamMembers from './Team';

function OrganisationSettings() {
  const links = [
    {
      title: 'Profile',
      component: <Profile />
    },
    {
      title: 'Team',
      component: <TeamMembers />
    },
    {
      title: 'Receipts & Emails',
      component: <ReceiptAndEmails />
    },

    {
      title: 'Integrations',
      component: <Integrations />
    },
    {
      title: 'Payment Processors',
      component: <PaymentProcessor />
    },
    {
      title: 'Account',
      component: <Account />
    },
    {
      title: 'Premium',
      component: <Premium />
    },
    {
      title: 'Restore Contacts',
      component: <RestoreContacts />
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={links} scroll />
    </DashboardLayout>
  );
}

export default OrganisationSettings;
