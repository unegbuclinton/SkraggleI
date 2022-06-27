import React from 'react';
import styled from 'styled-components';
import DonationAmount from './DonationAmount';
import DonationPayment from './DonationPayment';

function DonationMain({ IncrementTab, DecrementTab }) {
  return (
    <DonationMainWrapper>
      <DonationAmount IncrementTab={IncrementTab} DecrementTab={DecrementTab} />
      <DonationPayment />
    </DonationMainWrapper>
  );
}

export default DonationMain;

export const DonationMainWrapper = styled.div`
  display: flex;
  flex: 1 auto;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
