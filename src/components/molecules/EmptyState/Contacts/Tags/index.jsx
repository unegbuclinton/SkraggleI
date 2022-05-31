import EmptyState from 'components/organisms/EmptyState';
import { DPIconTag } from 'icons';
import React from 'react';
import styled from 'styled-components';

function TagsEmptyState({ setOpen }) {
  return (
    <EmptyStateWrapper>
      <EmptyState
        svg={<DPIconTag />}
        title="No Tags Yet"
        name="Create Your Tag"
        onClick={() => setOpen(true)}
      />
    </EmptyStateWrapper>
  );
}

export default TagsEmptyState;

const EmptyStateWrapper = styled.div`
  margin-top: 2.4rem;
`;
