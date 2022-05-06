import React from 'react';
import { ArchivedContainer, ArchivedWrapper } from './styles.';

function Archived() {
  return (
    <ArchivedWrapper>
      <ArchivedContainer>
        <h1 className="message">There are no archived elements.</h1>
      </ArchivedContainer>
    </ArchivedWrapper>
  );
}

export default Archived;
