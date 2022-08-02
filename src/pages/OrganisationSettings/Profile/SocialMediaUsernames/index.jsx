import Button from 'components/atoms/Button/Button';
import React from 'react';
import { VolunteerContainer, VolunteerHeading, VolunteerWrapper } from './styles';

function SocialMediaUsernames() {
  return (
    <>
      <VolunteerWrapper>
        <VolunteerHeading>
          <h1 className="heading">Social Media Usernames</h1>
          <Button className="heading-btn">Edit</Button>
        </VolunteerHeading>
        <VolunteerContainer>
          <h2 className="title">TWITTER</h2>
          <p className="info size">-</p>
        </VolunteerContainer>
        <VolunteerContainer>
          <h2 className="title">FACEBOOK</h2>
          <p className="info size">-</p>
        </VolunteerContainer>
        <VolunteerContainer>
          <h2 className="title">FORM FAVICON IMAGE </h2>
          <p className="info size">-</p>
        </VolunteerContainer>
      </VolunteerWrapper>
    </>
  );
}

export default SocialMediaUsernames;
