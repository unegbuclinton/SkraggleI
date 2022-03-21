import React from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/segmentsData";

function SegmentsTable() {
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SegmentsTable;
