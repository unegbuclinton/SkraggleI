import EmptyState from 'components/organisms/EmptyState';
import { DPIconLaptop } from 'icons';
import React from 'react';

function AccountEmptyState() {
  return (
    <EmptyState
      svg={<DPIconLaptop />}
      lontext
      title="Not So Fast!"
      nexTtitle="This Feature Isn’t Available In"
      thirdTitle="Your Sandbox"
      name="Subscribe Now"
    />
  );
}

export default AccountEmptyState;
