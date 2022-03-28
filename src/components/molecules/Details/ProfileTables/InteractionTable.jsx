import React from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/interactionData";
import { TableHeading, TableWrapper } from "./styles";
import ProfileLayOut from "..";

function InteractionTable() {
  return (
    <ProfileLayOut heading="Interactions">
      <TableWrapper>
        <TableHeading>
          <h2 className="heading">5 Interactions</h2>
        </TableHeading>
        <Table columns={columns} data={data} />
      </TableWrapper>
    </ProfileLayOut>
  );
}

export default InteractionTable;
