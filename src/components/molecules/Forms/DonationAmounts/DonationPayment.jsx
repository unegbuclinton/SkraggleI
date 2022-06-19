import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import DonationSetupFormComponent from '../donationSetup/DonationSetupFormComponent';

function DonationPayment() {
  return (
    <>
      <FormCardLayout>
        <DonationSetupFormComponent />
      </FormCardLayout>
    </>
  );
}

export default DonationPayment;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex: 1;
`;
