import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import DonationSetupComponent from './DonationSetupComponent';
import FormComponent from './DonationSetupFormComponent';

function DonationSetup() {
  return (
    <DonationSetUpWrapper>
      <DonationSetupComponent />
      <DonationOptionWrapper>
        <FormCardLayout>
          <FormComponent />
        </FormCardLayout>
      </DonationOptionWrapper>
    </DonationSetUpWrapper>
  );
}

export default DonationSetup;

export const DonationSetUpWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
`;

export const DonationOptionWrapper = styled.div`
  display: flex;
  flex: 1;
`;
