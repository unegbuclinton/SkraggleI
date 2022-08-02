import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import ImpactAreaOverview from './Fundraising/ImpactAreaOverview';

function ImpactAreaDetails({ children }) {
  return (
    <ImpactAreaContainer>
      <HeadingContainer>
        <h1 className="main-heading">Impact Area Overview</h1>
      </HeadingContainer>
      <ImpactAreaWrapper>
        <CardWrapper>
          <ImpactAreaOverview />
        </CardWrapper>

        <ImpactAreaContentWrapper>
          <ImpactAreaContent>{children}</ImpactAreaContent>
        </ImpactAreaContentWrapper>
      </ImpactAreaWrapper>
    </ImpactAreaContainer>
  );
}

export default ImpactAreaDetails;

const ImpactAreaContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ImpactAreaWrapper = styled.div`
  display: flex;
  gap: 1.572rem;
  height: 100%;
  padding-bottom: 8rem;
  overflow: hidden;
`;

const HeadingContainer = styled.div`
  display: flex;
  gap: 24.546rem;
  position: -webkit-sticky;
  position: sticky;
  /* top: 4.8rem; */
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
  height: 100%;
`;

const ImpactAreaContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ImpactAreaContent = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`;
