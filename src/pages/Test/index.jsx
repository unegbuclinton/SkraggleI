import DashboardLayout from 'components/layouts/DashboardLayout';
import EditPersonalInfoModal from 'components/molecules/Contacts/Modals/SubModals';
import React from 'react';

function Test() {
  return (
    <DashboardLayout>
      <EditPersonalInfoModal />
    </DashboardLayout>
  );
}

export default Test;

// const Wrapper = styled.div`
//   background-color: #333;
//   height: 100vh;
// `;
