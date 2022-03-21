import LogIn from 'components/molecules/LogIn/LogIn';
import Registration from 'components/molecules/Registration/Registration';
import ResendVerification from 'components/molecules/resendVerification/ResendVerification';
import ResetPassword from 'components/molecules/ResetPassword/ResetPassword';
import SendVerification from 'components/molecules/sendVerification/SendVerification';
import Sidebar from 'components/molecules/Sidebar';
import Dashboard from './Dashboard';

const routePaths = [
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
    element: <Dashboard />,
    children: [
      {
        path: 'smart-widget',
        element: <Sidebar />,
      },
      {
        path: 'contact-widget',
        element: <SendVerification />,
      },
      {
        path: 'fundraising-widget',
        element: <SendVerification />,
      },
    ],
  },
];

export default routePaths;
