import LogIn from "components/molecules/LogIn";
import Registration from "components/molecules/Registration/Registration";
import ResendVerification from "components/molecules/resendVerification/ResendVerification";
import ResetPassword from "components/molecules/ResetPassword/ResetPassword";
import SendVerification from "components/molecules/sendVerification/SendVerification";
import TestComponent from "components/organisms/TestComponent";
import Contacts from "pages/ContactsPage/Contact/index";
import { Link } from "react-router-dom";
import Dashboard from "components/layouts/DashboardLayout";

import Profile from "pages/ContactsPage/Profile";

const routePaths = [
  {
    path: "/",
    element: <Link to="/"></Link>,
  },
  {
    path: "/login",
    element: <TestComponent />,
  },
  {
    path: "/signup",
    element: <Registration />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/resend-verification",
    element: <ResendVerification />,
  },
  {
    path: "/send-verification",
    element: <SendVerification />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "smart-widget",
        element: <LogIn />,
      },
      {
        path: "contact-widget",
        element: <SendVerification />,
      },
      {
        path: "fundraising-widget",
        element: <SendVerification />,
      },
    ],
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },

  {
    path: "/contact-profile",
    element: <Profile />,
  },
];

export default routePaths;
