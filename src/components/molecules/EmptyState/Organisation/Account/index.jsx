import EmptyState from 'components/organisms/EmptyState';
import { DPIconLaptop } from 'icons';
import React from 'react';
import styled from 'styled-components';

function AccountEmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconLaptop />}
        lontext
        title="Not So Fast!"
        nexTtitle="This Feature Isn’t Available In"
        thirdTitle="Your Sandbox"
        name="Subscribe Now"
      />
    </EmptyStateWrapper>
  );
}

export default AccountEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 1.6rem;
`;
