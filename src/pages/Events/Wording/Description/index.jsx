import Table from "components/layouts/Table";
import React from "react";
import RightRowData from "../tableRow/RightRowData";
import TableRowLeft from "../tableRow/TableRowLeft";
import { WordingHeader, WordingWrapper } from "./styles";

function Description() {
  const columns = [
    {
      name: "ORIGINAL",
      selector: (row) => row.original,
      cell: () => <TableRowLeft leftText="Required" />,
      width: "57rem",
    },

    {
      name: "CUSTOM",
      selector: (row) => row.custom,
      cell: () => <RightRowData />,
    },
  ];
  const data = [
    {
      original: "",
      custom: "",
    },
  ];
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Description</h1>
      </WordingHeader>
      <Table className="wording-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default Description;
