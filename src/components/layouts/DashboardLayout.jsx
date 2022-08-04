import DashboardHeader from 'components/molecules/DashboardNavbar';
import Sidebar from 'components/molecules/Sidebar';
import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

function DashboardLayout({ children, pageLinks, section }) {
  return (
    <DashboardContainer>
      <Sidebar />
      <DashboardContentWrapper>
        <DashboardHeader pageLinks={pageLinks} section={section} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
}

export default DashboardLayout;

const DashboardContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${COLORS['bg-light-blue']};
`;

const DashboardContentWrapper = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DashboardContent = styled.div`
  flex: 1;
  overflow: hidden;
  height: 100%;
  padding: 1.6rem;
  .profile-tab {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: red;
  }
`;
