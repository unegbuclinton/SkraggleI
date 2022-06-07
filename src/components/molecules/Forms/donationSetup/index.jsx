import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import DonationSetupComponent from './DonationSetupComponent';
import FormComponent from './DonationSetupFormComponent';

function DonationSetup() {
  return (
    <DonationSetUpWrapper>
      <DonationSetupComponent />
      <FormCardLayout>
        <FormComponent />
      </FormCardLayout>
    </DonationSetUpWrapper>
  );
}

export default DonationSetup;

const DonationSetUpWrapper = styled.div`
  display: flex;
  gap: 1.73rem;
`;
