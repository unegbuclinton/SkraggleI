import React from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/houseHoldData";

function HouseHoldsTable() {
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default HouseHoldsTable;
