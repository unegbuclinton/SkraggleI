import EmptyState from 'components/organisms/EmptyState';
import { DPIconPhone } from 'icons';
import React from 'react';

function RestoreContactEmptyState() {
  return <EmptyState svg={<DPIconPhone />} restore title="No deleted contacts found." />;
}

export default RestoreContactEmptyState;
