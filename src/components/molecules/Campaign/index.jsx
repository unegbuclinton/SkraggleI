// import { COLORS } from 'constants/colors';
// import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import OverviewDetails from './OverviewDetails';

function CampaignLayout({ children }) {
  return (
    <ProfileContainer>
      <ProfileWrapper>
        <OverviewDetails />

        <ProfileContentWrapper>
          <ProfileContent>{children}</ProfileContent>
        </ProfileContentWrapper>
      </ProfileWrapper>
    </ProfileContainer>
  );
}

export default CampaignLayout;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1.6rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const ProfileContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 2rem;
`;

const ProfileContent = styled.div`
  flex: 1;
  overflow: auto;
`;
