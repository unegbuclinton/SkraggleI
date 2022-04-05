import Checkbox from 'components/atoms/CheckBox';
import RadioGroup from 'components/atoms/RadioGroup';
import DashboardLayout from 'components/layouts/DashboardLayout';
import ForgotPassword from 'components/molecules/ForgotPassword';
import LogIn from 'components/molecules/LogIn';
import Registration from 'components/molecules/Registration';
import ResendVerification from 'components/molecules/resendVerification/ResendVerification';
import ResetPassword from 'components/molecules/ResetPassword';
import SendVerification from 'components/molecules/sendVerification/SendVerification';
import Campaign from 'pages/Campaign';
import CampaignDetails from 'pages/CampaignDetails';
import Contacts from 'pages/ContactsPage';
import Profile from 'pages/ContactsPage/Profile';
import Dashboard from 'pages/Dashboard';
import Donations from 'pages/Donations';
import MailBlast from 'pages/MailBlast';
import MonthlyNewsteller from 'pages/MailBlast/MonthlyNewsteller';
import P2P from 'pages/P2P';
import P2PDetails from 'pages/P2PDetails';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// let isAuthenticated = true;
// const PrivateWrapper = ({ isAuthenticated }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

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
    path: '/forgotpassword',
    element: <ForgotPassword />,
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
        element: <Dashboard />,
      },
      {
        path: 'smart',
        element: <Campaign />,
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
    path: 'contacts/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Contacts />,
      },
      {
        path: 'contact-profile',
        element: <Profile />,
      },
    ],
  },

  {
    path: '/donations',
    element: <Donations />,
  },
  {
    path: 'mail-blasts/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <MailBlast />,
      },
      {
        path: ':id',
        element: <MonthlyNewsteller />,
      },
    ],
  },
  {
    path: 'campaign/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Campaign />,
      },
      {
        path: ':id',
        element: <CampaignDetails />,
      },
    ],
  },
  {
    path: 'peer-to-peer/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <P2P />,
      },
      {
        path: ':id',
        element: <P2PDetails />,
      },
    ],
  },
  {
    path: '/forms',
    element: <DashboardLayout>Forms yet to be added</DashboardLayout>,
  },

  {
    path: '/elements',
    element: <DashboardLayout>Elements yet to be added</DashboardLayout>,
  },
  {
    path: '/events',
    element: <DashboardLayout>Events yet to be added</DashboardLayout>,
  },
  {
    path: '/landing-page',
    element: <DashboardLayout>Landing Page yet to be added</DashboardLayout>,
  },
  {
    path: '/mail-blast',
    element: <DashboardLayout>Mail Blast yet to be added</DashboardLayout>,
  },

  {
    path: '/test',
    element: (
      <>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Radio value="any" name="radio-test" labelText="Hellp" />
          <Radio value="all" name="radio-test" />
          <Radio value="which" name="radio-test" />
          <Radio value="where" name="radio-test" />
        </div> */}
        <RadioGroup
          groupName="Set Axis"
          radioData={[
            { value: 'autoscale', labelText: 'Autoscale' },
            { value: 'manual', labelText: 'Manual' },
          ]}
        />
        <Checkbox label="Clinton" />
      </>
    ),
  },
];

export default routePaths;
