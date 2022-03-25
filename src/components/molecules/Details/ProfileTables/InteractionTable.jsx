import React from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/interactionData";
import { TableHeading, TableWrapper } from "./styles";

function InteractionTable() {
  return (
    <TableWrapper>
      <TableHeading>
        <h2 className="heading">5 Interactions</h2>
      </TableHeading>
      <Table columns={columns} data={data} />
    </TableWrapper>
  );
}

export default InteractionTable;
