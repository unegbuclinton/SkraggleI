import EmptyState from 'components/organisms/EmptyState';
import { DPIconChart } from 'icons';
import React from 'react';

function SegmentsEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconChart />}
      title="No Segments Yet"
      name="Creat Your Segments"
      onClick={() => setOpen(true)}
    />
  );
}

export default SegmentsEmptyState;
