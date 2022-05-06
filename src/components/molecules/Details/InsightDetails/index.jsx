import React from 'react';
import GeneralUpdate from 'components/molecules/Details/InsightDetails/GeneralUpdate';
import Donor from 'components/molecules/Details/InsightDetails/DonorScore';
import SmartRecomendation from 'components/molecules/Details/InsightDetails/SmartRecomendations';
import PersonalInfo from 'components/molecules/Details/InsightDetails/PersonalInfo';
import Admin from 'components/molecules/Details/InsightDetails/Admin';
import ContactInfo from 'components/molecules/Details/InsightDetails/ContactInfo';
import Websites from 'components/molecules/Details/InsightDetails/Websites';
import Association from 'components/molecules/Details/InsightDetails/Associations';
import VolunteerInfo from 'components/molecules/Details/InsightDetails/VolunteerInfo';
import ProfileLayOut from '..';

function InsightDetails() {
  return (
    <ProfileLayOut heading="Insight Details">
      <GeneralUpdate />
      <Donor />
      <SmartRecomendation />
      <PersonalInfo />
      <Admin />
      <ContactInfo />
      <Websites />
      <Association />
      <VolunteerInfo />
    </ProfileLayOut>
  );
}

export default InsightDetails;
