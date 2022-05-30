import EmptyState from 'components/organisms/EmptyState';
import { DPIconTodo } from 'icons';
import React from 'react';

const SubTodosEmptyState = ({ setOpen }) => {
  return (
    <EmptyState
      svg={<DPIconTodo />}
      contactTitle="No To-Do added Yet"
      name="Add To-Do"
      onClick={() => setOpen(true)}
    />
  );
};

export default SubTodosEmptyState;
