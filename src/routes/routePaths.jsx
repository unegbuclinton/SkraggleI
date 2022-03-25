import LogIn from 'components/molecules/LogIn';
import Registration from 'components/molecules/Registration';

import ResendVerification from 'components/molecules/resendVerification/ResendVerification';
import ResetPassword from 'components/molecules/ResetPassword';

import SendVerification from 'components/molecules/sendVerification/SendVerification';
import Campaign from 'pages/Campaign';
import CampaignDetails from 'pages/CampaignDetails';
import { Link, Outlet } from 'react-router-dom';

const routePaths = [
  {
    path: '/',
    element: <Link to="/"></Link>,
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
        path: 'smart',
        element: <LogIn />,
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
    path:'/campaign',
    element: <Campaign/>
  },
  {
    path: '/*',
    element: <CampaignDetails/>
  }
];

export default routePaths;
