import LogIn from "components/molecules/LogIn";
import Registration from "components/molecules/Registration";
import ResendVerification from "components/molecules/resendVerification/ResendVerification";
import ResetPassword from "components/molecules/ResetPassword";
import SendVerification from "components/molecules/sendVerification/SendVerification";
import Tab from "components/molecules/Tab";
import Campaign from "pages/Campaign";
import Dashboard from "pages/Dashboard";
import Donations from "pages/Donations";
import MailBlast from "pages/MailBlast";
import { Link, Outlet } from "react-router-dom";

const tabs = [
  { title: "Campaigns", component: <h2>Content One renders here!</h2> },
  { title: "Archive", component: <h2>Content Two renders here!</h2> },
  { title: "Forms", component: <h2>Content Three renders here!</h2> },
];
const routePaths = [
  {
    path: "/",
    element: <Link to="/login">Go to Login</Link>,
  },
  {
    path: "/login",
    element: <LogIn />,
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
    path: "dashboard/*",
    // isPrivate: true,
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/donations",
    element: <Donations />,
  },
  {
    path: "/campaign",
    element: <Campaign />,
  },
  {
    path: "/mail-blasts",
    element: <MailBlast />,
  },
  {
    path: "/test",
    element: <Tab tabs={tabs} />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
];

export default routePaths;
