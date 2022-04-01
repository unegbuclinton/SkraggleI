import {
  DPIconCampaign,
  DPIconContacts,
  DPIconDashboard,
  DPIconDonations,
  DPIconElements,
  DPIconEvents,
  DPIconForms,
  DPIconLandingPage,
  DPIconMailBlasts,
  DPIconP2P,
  DPIconReports,
} from 'icons';

export const SidebarContent = [
  {
    route: '/dashboard',
    icon: <DPIconDashboard />,
    text: 'Dashboard',
  },
  {
    route: '/contacts',
    icon: <DPIconContacts />,
    text: 'Contacts',
  },
  {
    route: '/campaign',
    icon: <DPIconCampaign />,
    text: 'Campaign',
  },
  {
    route: '/donations',
    icon: <DPIconDonations />,
    text: 'Donations',
  },
  {
    route: '/forms',
    icon: <DPIconForms />,
    text: 'Forms',
  },
  {
    route: '/peer-to-peer',
    icon: <DPIconP2P />,
    text: 'P2P',
  },
  {
    route: '/events',
    icon: <DPIconEvents />,
    text: 'Events',
  },
  {
    route: '/landing-page',
    icon: <DPIconLandingPage />,
    text: 'Landing Page',
  },
  {
    route: '/elements',
    icon: <DPIconElements />,
    text: 'Elements',
  },
  {
    route: '/mail-blasts',
    icon: <DPIconMailBlasts />,
    text: 'Mail Blasts',
  },
  {
    route: '/reports',
    icon: <DPIconReports />,
    text: 'Reports',
  },
];
