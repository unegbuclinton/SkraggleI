/* eslint-disable no-extra-boolean-cast */
import ArchivedEmptyState from 'components/molecules/EmptyState/Events/Archived';
import React from 'react';
import { ArchivedWrapper } from './styles.';

function Archived() {
  const data = [];
  return <ArchivedWrapper>{!!data.length ? ' Some data' : <ArchivedEmptyState />}</ArchivedWrapper>;
}

export default Archived;
