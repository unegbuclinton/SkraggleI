import Table from "components/layouts/Table";
import React from "react";
import TableRowLeft from "../tableRow/TableRowLeft";
import TableRowRight from "../tableRow/TableRowRight";
import { WordingHeader, WordingWrapper } from "./styles";

function BillinInfomation() {
  const columns = [
    {
      name: "ORIGINAL",
      selector: (row) => row.original,
      cell: () => <TableRowLeft leftText="Company Donation" />,
      width: "57rem",
    },

    {
      name: "CUSTOM",
      selector: (row) => row.custom,
      cell: () => <TableRowRight rightText="Click to set custom text" />,
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
        <h1 className="heading">Personal and billing information</h1>
      </WordingHeader>
      <Table className="wording-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default BillinInfomation;
