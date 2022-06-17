import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import DonationSetupComponent from './DonationSetupComponent';
import FormComponent from './DonationSetupFormComponent';

function DonationSetup({ IncrementTab, DecrementTab }) {
  return (
    <DonationSetUpWrapper>
      <DonationSetupComponent IncrementTab={IncrementTab} DecrementTab={DecrementTab} />
      <FormCardLayout>
        <FormComponent />
      </FormCardLayout>
    </DonationSetUpWrapper>
  );
}

export default DonationSetup;

export const DonationSetUpWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* padding-bottom: 12.5rem; */
`;
