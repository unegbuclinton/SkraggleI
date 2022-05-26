import DashboardLayout from 'components/layouts/DashboardLayout';
import EditContactInfoModal from 'components/molecules/Contacts/SubModals/EditContactInfo';
import React from 'react';

// import styled from 'styled-components';

function Test() {
  return (
    <DashboardLayout>
      <EditContactInfoModal />
    </DashboardLayout>
  );
}

export default Test;

// const Wrapper = styled.div`
//   background-color: #333;
//   height: 100vh;
// `;
