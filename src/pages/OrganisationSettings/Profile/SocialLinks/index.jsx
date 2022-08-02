import Button from 'components/atoms/Button/Button';
import React from 'react';
import { PersonalInfoContainer, PersonalInfoHeading, PersonalInfoWrapper } from './styles';

function SocialLinks() {
  return (
    <PersonalInfoWrapper>
      <PersonalInfoHeading>
        <h1 className="heading">Social Links</h1>
        <Button className="info-btn">Edit</Button>
      </PersonalInfoHeading>
      <PersonalInfoContainer>
        <h2 className="info">TWITTER</h2>
        <h2 className="title mr">-</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">FACEBOOK</h2>
        <h2 className="title first-name">-</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">YOUTUBE</h2>
        <h2 className="title mr">-</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info"> LINKEDIN</h2>
        <h2 className="title first-name">-</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">INSTAGRAM</h2>
        <h2 className="title first-name">-</h2>
      </PersonalInfoContainer>
    </PersonalInfoWrapper>
  );
}

export default SocialLinks;
