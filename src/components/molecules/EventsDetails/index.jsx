import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import Tabs from "../Tabs";
import Attendees from "./Attendees";
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
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
}

export default EventsDetails;
