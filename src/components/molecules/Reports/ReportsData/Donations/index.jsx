import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import DonationMetrics from './DonationMetrics';
import RevenueMetrics from './RevenueMetrics';

function Donations() {
  return (
    <DonationWrapper>
      <DonationHeader>
        <h1>Donations</h1>
      </DonationHeader>
      <DonationMetrics />
      <RevenueMetrics />
    </DonationWrapper>
  );
}

export default Donations;

export const DonationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.4rem 1.8rem 2.4rem 1.8rem;
  border: 1px solid ${COLORS['porcelain-white']};
  margin-top: 2.4rem;
`;

export const DonationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.4rem 2.4rem 0rem;
`;
