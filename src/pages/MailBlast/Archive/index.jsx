import Card from 'components/atoms/Card';
import React, { useState } from 'react';
import { ArchiveComment, ArchiveWrapper } from './styles';

function Archive() {
  const [archive] = useState([]);
  return (
    <ArchiveWrapper>
      <Card className="archive-card">
        {archive.length === 0 ? (
          <ArchiveComment> There are no archived elements.</ArchiveComment>
        ) : (
          archive.map(({ index, item }) => <p key={index}> {item}</p>)
        )}
      </Card>
    </ArchiveWrapper>
  );
}

export default Archive;
