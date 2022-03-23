import { React } from "react";

import { ArchiveWrapper } from "./styles";

const ArchiveTable = () => {
  return (
    <ArchiveWrapper className="archive-wrapper">
      <div className="archive-wrapper__box">
        <h1 className="archive-wrapper__heading">
          There are no archived elements.
        </h1>
      </div>
    </ArchiveWrapper>
  );
};

export default ArchiveTable;
