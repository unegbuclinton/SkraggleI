import PageLinks from "components/atoms/PageLinks";
import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from "../Tabs";
import Attendees from "./Attendees";
import SearchFilter from "./Attendees/SearchFilter";
import Details from "./Details";
import Fields from "./Fields";
import Packages from "./Packages";
import PromoCodes from "./Promocodes";

function EventsDetails() {
  const links = [
    {
      title: "Details",
      component: <Details />,
    },
    {
      title: "Packages",
      component: <Packages />,
    },
    {
      title: "Fields",
      component: <Fields />,
    },
    {
      title: "Promo codes",
      component: <PromoCodes />,
    },
    {
      title: "Attendee",
      component: <Attendees />,
      actionComponent: <SearchFilter />,
    },
  ];
  const name = useLocation()?.state?.name;
  return (
    <DashboardLayout
      pageLinks={
        <PageLinks pageLinkBefore="events" to="/events" names={name} />
      }
    >
      <Tabs tabs={links} />
    </DashboardLayout>
  );
}

export default EventsDetails;
