import DashboardLayout from 'components/layouts/DashboardLayout';
import Profile from 'pages/OrganisationSettings/Profile';
// import DashboardHeader from 'components/molecules/DashboardNavbar';
import React from 'react';
function Test() {
  return (
    <DashboardLayout>
      {/* <DashboardHeader /> */}
      <Profile />
    </DashboardLayout>
  );
}

export default Test;
