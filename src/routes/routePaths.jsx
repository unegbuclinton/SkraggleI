import LogIn from 'components/molecules/LogIn';
import Registration from 'components/molecules/Registration';
import ResendVerification from 'components/molecules/resendVerification/ResendVerification';
import ResetPassword from 'components/molecules/ResetPassword';
import SendVerification from 'components/molecules/sendVerification/SendVerification';
import Tab from 'components/molecules/Tab';
import Campaign from 'pages/Campaign';
import CampaignDetails from 'pages/CampaignDetails';
import Dashboard from 'pages/Dashboard';
import Donations from 'pages/Donations';
import { Link, Outlet } from 'react-router-dom';
const tabs = [
  { title: 'Campaigns', component: <h2>Content One renders here!</h2> },
  { title: 'Archive', component: <h2>Content Two renders here!</h2> },
  { title: 'Forms', component: <h2>Content Three renders here!</h2> },
];
const routePaths = [
  {
    path: '/',
    element: <Link to="/login">Go to Login</Link>,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <Registration />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/resend-verification',
    element: <ResendVerification />,
  },
  {
    path: '/send-verification',
    element: <SendVerification />,
  },
  {
    path: 'dashboard/*',
    // isPrivate: true,
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <div>Dashboard</div>,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'contact',
        element: <SendVerification />,
      },
      {
        path: 'fundraising',
        element: <SendVerification />,
      },
    ],
  },
  {
    path: '/contact',
    element: <div>Contacts</div>,
  },
  {
    path: '/donations',
    element: <Donations />,
  },
  {
    path: '/campaign',
    element: <Campaign />,
  },
  {
    path: '/test',
    element: <Tab tabs={tabs} />,
  },
  {
    path: '/*',
    element: <CampaignDetails />,
  },
];

export default routePaths;
