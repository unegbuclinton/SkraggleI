import React from 'react';
import styled from 'styled-components';
import DonationMetrics from './DonationMetrics';
import FundraisingActivity from './FundraisingActivity';
import KeyPerformanceIndicatiors from './KeyPerformanceIndicatiors';
import RecentTransactions from './RecentTransactions';
import RevenueMetrics from './RevenueMetrics';

const DonationsSummary = () => {
  return (
    <DonationsSummaryWrapper>
      <FundraisingActivity />
      <DonationMetrics />
      <RevenueMetrics />
      <KeyPerformanceIndicatiors />
      <RecentTransactions />
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
