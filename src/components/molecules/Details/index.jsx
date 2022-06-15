import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import PersonalDetailsCard from './PersonalDetails/PersonalDetailsCard';

function ProfileLayOut({ children, heading }) {
  return (
    <ProfileContainer>
      <HeadingContainer>
        <h1 className="main-heading">Personal Details</h1>
        <h1 className="main-heading">{heading}</h1>
      </HeadingContainer>
      <ProfileWrapper>
        <CardWrapper>
          <PersonalDetailsCard />
        </CardWrapper>

        <ProfileContentWrapper>
          <ProfileContent>{children}</ProfileContent>
        </ProfileContentWrapper>
      </ProfileWrapper>
    </ProfileContainer>
  );
}

export default ProfileLayOut;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.572rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  gap: 24.546rem;
  position: -webkit-sticky;
  position: sticky;
  top: 4.8rem;
  z-index: 1;
  background-color: ${COLORS['bg-light-blue']};
  .main-heading {
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['gray-500']};
    padding-bottom: 1.6rem;
    padding-top: 2.4rem;
    padding-left: 0.5rem;
  }
`;

const CardWrapper = styled.div`
  height: 100vh;
`;

const ProfileContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const ProfileContent = styled.div`
  flex: 1;
  /* width: 100%; */
  overflow-y: auto;
`;
