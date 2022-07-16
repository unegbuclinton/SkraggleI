import { DPIconsPen } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { nameAbbr } from 'utilities/helpers';
import Benchmark from './Benchmark';
import OutBound from './OutboundEmailSettings';
import PublicInfo from './PublicInformation';
import SocialLinks from './SocialLinks';
import SocialMediaUsernames from './SocialMediaUsernames';
import { CardWrapper, ContentsWrapper, Line, ProfileWrapper, Container } from './styles';

function Profile() {
  const { eachContact } = useSelector((state) => state.contact);
  const { first_name, last_name, primary_email, primary_phone } = eachContact;
  const fullName = `${first_name} ${last_name}`;
  return (
    <ProfileWrapper>
      <CardWrapper>
        <ContentsWrapper>
          <div className="icon-container">
            <DPIconsPen className="icon-container__pen-icon" />
          </div>
          <div className="container">
            <div className="container__circle">
              <p className="container__circle--text">{nameAbbr(fullName)}</p>
            </div>
            <p className="container__name"> {`${first_name} ${last_name}`}</p>
          </div>
          <Line />
          <div className="highlight">
            <p className="highlight__phone">PRIMARY PHONE</p>
            <p className="highlight__phone-number">{primary_phone}</p>
          </div>
          <Line />
          <div className="primary">
            <h2 className="primary__heading">PRIMARY EMAIL</h2>
            <p className="primary__email">{primary_email}</p>
          </div>
          <Line />
        </ContentsWrapper>
      </CardWrapper>
      <Container>
        <OutBound />
        <PublicInfo />
        <Benchmark />
        <SocialLinks />
        <SocialMediaUsernames />
      </Container>
    </ProfileWrapper>
  );
}

export default Profile;
