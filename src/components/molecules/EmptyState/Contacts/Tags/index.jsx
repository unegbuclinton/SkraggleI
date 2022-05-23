import EmptyState from 'components/organisms/EmptyState';
import { DPIconTag } from 'icons';
import React from 'react';

function TagsEmptyState({ setOpen }) {
  return (
    <EmptyState
      svg={<DPIconTag />}
      title="No Tags Yet"
      name="Creat Your Tag"
      onClick={() => setOpen(true)}
    />
  );
}

export default TagsEmptyState;
