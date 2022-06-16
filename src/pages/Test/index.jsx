import DashboardLayout from 'components/layouts/DashboardLayout';
import GoalMeterModal from 'components/molecules/ElementModal/GoalMeter';
// import DonationSetup from 'components/molecules/Forms/donationSetup';
// import DonationSetupComponent from 'components/molecules/Forms/donationSetup/DonationSetupComponent';
// import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React from 'react';

function Test() {
  return (
    <DashboardLayout>
      {/* <DonationSetup /> */}
      <GoalMeterModal />
    </DashboardLayout>
  );
}

export default Test;
