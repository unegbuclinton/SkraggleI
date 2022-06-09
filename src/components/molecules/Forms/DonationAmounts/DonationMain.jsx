import React from 'react';
import styled from 'styled-components';
import DonationAmount from './DonationAmount';
import DonationPayment from './DonationPayment';

function DonationMain() {
  return (
    <DonationMainWrapper>
      <DonationAmount />
      <DonationPayment />
    </DonationMainWrapper>
  );
}

export default DonationMain;

export const DonationMainWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  /* height: 770px; */
`;
