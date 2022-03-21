import React from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/tagsData";

function TagsTable() {
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TagsTable;
