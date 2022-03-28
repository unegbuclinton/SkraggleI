import React, { Children, useState } from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import InsightDetails from "components/molecules/Details/InsightDetails";
import { ProfileContainer, ProfileWrapper, TabLinksWrapper } from "./styles";
import PersonalDetailsCard from "components/molecules/Details/PersonalDetails/PersonalDetailsCard";
import { Link } from "react-router-dom";
import InteractionTable from "components/molecules/Details/ProfileTables/InteractionTable";
import TodosTable from "components/molecules/Details/ProfileTables/TodosTable";
import TransactionTable from "components/molecules/Details/ProfileTables/TransactionTable";
import MembershipsTable from "components/molecules/Details/ProfileTables/MembershipsTable";
import VolunteerTable from "components/molecules/Details/ProfileTables/VolunteerTable";
import Tab from "components/molecules/Tab";
import ProfileLayOut from "components/molecules/Details";

function Profile() {
  const links = [
    {
      title: "Profile",
      component: <InsightDetails />,
    },
    {
      title: "Interactions",
      component: <InteractionTable />,
    },
    {
      title: "To-Dos",
      component: <TodosTable />,
    },
    {
      title: "Transactions",
      component: <TransactionTable />,
    },
    {
      title: "Memberships",
      component: <MembershipsTable />,
    },
    {
      title: "Volunteering",
      component: <VolunteerTable />,
    },
  ];
  return (
    <DashboardLayout>
      <Tab tabs={links} />
    </DashboardLayout>
  );
}

export default Profile;
