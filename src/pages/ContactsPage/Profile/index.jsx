import React, { useState } from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import InsightDetails from "components/molecules/Details/Insight/InsightDetails";
import { ProfileContainer, ProfileWrapper, TabLinksWrapper } from "./styles";
import PersonalDetailsCard from "components/molecules/Details/PersonalDetails/PersonalDetailsCard";
import { Link } from "react-router-dom";
import InteractionTable from "components/molecules/Details/ProfileTables/InteractionTable";
import TodosTable from "components/molecules/Details/ProfileTables/TodosTable";
import TransactionTable from "components/molecules/Details/ProfileTables/TransactionTable";
import MembershipsTable from "components/molecules/Details/ProfileTables/MembershipsTable";
import VolunteerTable from "components/molecules/Details/ProfileTables/VolunteerTable";

function Profile() {
  const links = [
    {
      path: "/contact-profile",
      label: "profile",
      exact: "true",
    },
    {
      path: "/contact-profile",
      label: "Interactions",
      exact: "true",
    },
    {
      path: "/contact-profile",
      label: "To-Do's",
      exact: "true",
    },
    {
      path: "/contact-profile",
      label: "Transactions",
      exact: "true",
    },
    {
      path: "/contact-profile",
      label: "Memberships",
      exact: "true",
    },
    {
      path: "/contact-profile",
      label: "Volunteering",
      exact: "true",
    },
  ];

  const [active, setActive] = useState(0);

  const fireActive = (index) => {
    setActive(index);
    console.log(index);
  };

  return (
    <DashboardLayout>
      <TabLinksWrapper>
        {links.map((link, index) => (
          <Link
            onClick={() => {
              fireActive(index);
            }}
            className={index === active ? "link__item__active" : "each__link"}
            to={link.path}
          >
            {link.label}
          </Link>
        ))}
      </TabLinksWrapper>
      <ProfileWrapper>
        <div>
          <h1 className="header">Personal Details</h1>
          <PersonalDetailsCard />
        </div>
        {active === 0 && (
          <ProfileContainer>
            <h1 className="header">Insight Details </h1>
            <InsightDetails />
          </ProfileContainer>
        )}
        {active === 1 && (
          <ProfileContainer>
            <h1 className="header">Interactions</h1>
            <InteractionTable />
          </ProfileContainer>
        )}
        {active === 2 && (
          <ProfileContainer>
            <h1 className="header">To-Do’s</h1>
            <TodosTable />
          </ProfileContainer>
        )}
        {active === 3 && (
          <ProfileContainer>
            <h1 className="header">Transactions</h1>
            <TransactionTable />
          </ProfileContainer>
        )}
        {active === 4 && (
          <ProfileContainer>
            <h1 className="header">Membership</h1>

            <MembershipsTable />
          </ProfileContainer>
        )}
        {active === 5 && (
          <ProfileContainer>
            <h1 className="header">Vounteering</h1>
            <VolunteerTable />
          </ProfileContainer>
        )}
      </ProfileWrapper>
    </DashboardLayout>
  );
}

export default Profile;
