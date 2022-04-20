import React from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import ForgotPassword from "pages/ForgotPassword";
import Registration from "components/molecules/Registration";
import ResendVerification from "components/molecules/resendVerification/ResendVerification";
import ResetPassword from "components/molecules/ResetPassword";
import SendVerification from "components/molecules/sendVerification/SendVerification";
import Campaign from "pages/Campaign";
import CampaignDetails from "pages/CampaignDetails";
import Contacts from "pages/ContactsPage";
import Profile from "pages/ContactsPage/Profile";
import Dashboard from "pages/Dashboard";
import Donations from "pages/Donations";
import Events from "pages/Events";
import P2P from "pages/P2P";
import P2PDetails from "pages/P2PDetails";
import MailBlast from "pages/MailBlast";
import { Link, Outlet } from "react-router-dom";
import MonthlyNewsteller from "pages/MailBlast/MonthlyNewsteller";
import EventsDetails from "components/molecules/EventsDetails";
import RegistrationPackage from "components/molecules/EventsDetails/RegistrationPackage";
import Test from "pages/Test";
import UnsubscribeWarning from "pages/MailBlast/UnsubscribeWarning";
import LogIn from "pages/LogIn";

export const privateRoutes = [
  {
    path: "dashboard/*",
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
    path: "mail-blasts/*",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <MailBlast />,
      },
      {
        path: ":id",
        element: <MonthlyNewsteller />,
      },
      {
        path: "subscription-update",
        element: <UnsubscribeWarning />,
      },
    ],
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
    path: "events/*",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Events />,
      },
      {
        path: "events-details",
        element: <EventsDetails />,
      },
      {
        path: "registration-package",
        element: <RegistrationPackage />,
      },
    ],
  },
  {
    path: "peer-to-peer/*",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <P2P />,
      },
      {
        path: ":id",
        element: <P2PDetails />,
      },
    ],
  },
  {
    path: "/forms",
    element: <DashboardLayout>Forms yet to be added</DashboardLayout>,
  },

  {
    path: "/elements",
    element: <DashboardLayout>Elements yet to be added</DashboardLayout>,
  },

  {
    path: "/landing-page",
    element: <DashboardLayout>Landing Page yet to be added</DashboardLayout>,
  },
  {
    path: "/reports",
    element: <DashboardLayout>Reports yet to be added</DashboardLayout>,
  },
  {
    path: "*",
    element: (
      <DashboardLayout>
        <h1>404</h1>
      </DashboardLayout>
    ),
  },

  {
    path: "/test",
    element: <Test />,
  },
];


export const publicRoutes = [
  {
    path: "/",
    element: <Link to="/login">Go to Login</Link>,
  },
  {
    path: "/login",
    element: <LogIn onClick/>,
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
];