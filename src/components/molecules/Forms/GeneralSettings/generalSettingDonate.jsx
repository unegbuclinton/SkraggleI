import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import DonationSetupFormComponent from '../donationSetup/DonationSetupFormComponent';

function GeneralSettingDonate() {
  return (
    <PaymentOptionWrapper>
      <FormCardLayout>
        <DonationSetupFormComponent />
      </FormCardLayout>
    </PaymentOptionWrapper>
  );
}

export default GeneralSettingDonate;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex: 0.35;
`;
