import DashboardLayout from 'components/layouts/DashboardLayout';
import CompaniesEmptyState from 'components/molecules/EmptyState/Contacts/Companies';
import ContactEmptyState from 'components/molecules/EmptyState/Contacts/Contact';
import HouseHoldEmptyState from 'components/molecules/EmptyState/Contacts/HouseHolds';
import SegmentsEmptyState from 'components/molecules/EmptyState/Contacts/Segments';
import TagsEmptyState from 'components/molecules/EmptyState/Contacts/Tags';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
// import styled from 'styled-components';

function Test() {
  const links = [
    {
      title: 'Contact',
      component: <ContactEmptyState />
    },
    {
      title: 'companies',
      component: <CompaniesEmptyState />
    },
    {
      title: 'household',
      component: <HouseHoldEmptyState />
    },
    {
      title: 'tags',
      component: <TagsEmptyState />
    },
    {
      title: 'segment',
      component: <SegmentsEmptyState />
    }
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
}

export default Test;

// const Wrapper = styled.div`
//   background-color: #333;
//   height: 100vh;
// `;
