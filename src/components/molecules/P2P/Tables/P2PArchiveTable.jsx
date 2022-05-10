import { React } from 'react';

import { ArchiveWrapper, ContainerBody } from './styles';

const P2PArchiveTable = () => {
  return (
    <ContainerBody>
      <ArchiveWrapper className="archive-wrapper">
        <div className="archive-wrapper__box">
          <h1 className="archive-wrapper__heading">There are no archived elements.</h1>
        </div>
      </ArchiveWrapper>
    </ContainerBody>
  );
};

export default P2PArchiveTable;
