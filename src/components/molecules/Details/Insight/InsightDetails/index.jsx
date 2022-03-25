import React from "react";
import GeneralUpdate from "components/molecules/Details/Insight/GeneralUpdate";
import Donor from "components/molecules/Details/Insight/DonorScore";
import SmartRecomendation from "components/molecules/Details/Insight/SmartRecomendations";
import PersonalInfo from "components/molecules/Details/Insight/PersonalInfo";
import Admin from "components/molecules/Details/Insight/Admin";
import ContactInfo from "components/molecules/Details/Insight/ContactInfo";
import Websites from "components/molecules/Details/Insight/Websites";
import Association from "components/molecules/Details/Insight/Associations";
import VolunteerInfo from "components/molecules/Details/Insight/VolunteerInfo";

function InsightDetails() {
  return (
    <div>
      <GeneralUpdate />
      <Donor />
      <SmartRecomendation />
      <PersonalInfo />
      <Admin />
      <ContactInfo />
      <Websites />
      <Association />
      <VolunteerInfo />
    </div>
  );
}

export default InsightDetails;
