import React from 'react';
import styled from 'styled-components';
import DonationMetrics from './DonationMetrics';
import FundraisingActivity from './FundraisingActivity';

const DonationsSummary = () => {
  return (
    <DonationsSummaryWrapper>
      <FundraisingActivity />
      <DonationMetrics />
    </DonationsSummaryWrapper>
  );
};

export default DonationsSummary;

const DonationsSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100%;
`;
