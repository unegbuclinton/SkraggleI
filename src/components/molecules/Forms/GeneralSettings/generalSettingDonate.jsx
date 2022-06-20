import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import DonationSetupFormComponent from '../donationSetup/DonationSetupFormComponent';

function GeneralSettingDonate() {
  return (
    <>
      <FormCardLayout>
        <DonationSetupFormComponent />
      </FormCardLayout>
    </>
  );
}

export default GeneralSettingDonate;
