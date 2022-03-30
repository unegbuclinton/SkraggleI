import ForgotPassword from "components/molecules/ForgotPassword";
import LogIn from "components/molecules/LogIn";
import Registration from "components/molecules/Registration";
import ResendVerification from "components/molecules/resendVerification/ResendVerification";
import ResetPassword from "components/molecules/ResetPassword";
import SendVerification from "components/molecules/sendVerification/SendVerification";
import Tabs from "components/molecules/Tabs";
import Campaign from "pages/Campaign";
import CampaignDetails from "pages/CampaignDetails";
import Contacts from "pages/ContactsPage";
import Profile from "pages/ContactsPage/Profile";
import Dashboard from "pages/Dashboard";
import Donations from "pages/Donations";
import { Link, Outlet } from "react-router-dom";
import { React, createElement } from "react";
import DashboardLayout from "components/layouts/DashboardLayout";

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
    path: "/forgotpassword",
    element: <ForgotPassword />,
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
      {
        path: "smart",
        element: <Campaign />,
      },
      {
        path: "contact",
        element: <SendVerification />,
      },
      {
        path: "fundraising",
        element: <SendVerification />,
      },
    ],
  },
  {
    path: "contacts/*",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Contacts />,
      },
      {
        path: "contact-profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/donations",
    element: <Donations />,
  },
  {
    path: "campaign/*",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Campaign />,
      },
      {
        path: ":id",
        element: <CampaignDetails />,
      },
    ],
  },
  {
    path:"/forms",
    element: <DashboardLayout>Forms yet to be added</DashboardLayout>
  },
  {
    path:"/peer-to-peer",
    element: <DashboardLayout>P2P yet to be added</DashboardLayout>
  },
  {
    path:"/elements",
    element: <DashboardLayout>Elements yet to be added</DashboardLayout>
  },
  {
    path:"/events",
    element: <DashboardLayout>Events yet to be added</DashboardLayout>
  },
  {
    path:"/landing-page",
    element: <DashboardLayout>Landing Page yet to be added</DashboardLayout>
  },
  {
    path:"/mail-blast",
    element: <DashboardLayout>Mail Blast yet to be added</DashboardLayout>
  },

  {
    path: "/test",
    element: <Tabs tabs={tabs} />,
  },
];

export default routePaths;
