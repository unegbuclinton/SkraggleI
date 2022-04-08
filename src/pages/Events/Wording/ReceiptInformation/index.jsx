import React from "react";
import Table from "components/layouts/Table";
import { WordingHeader, WordingWrapper } from "./styles";
import TableRowRight from "../tableRow/TableRowRight";
import TableRowLeft from "../tableRow/TableRowLeft";

function ReceiptInformation() {
  const columns = [
    {
      name: "ORIGINAL",
      selector: (row) => row.original,
      cell: () => <TableRowLeft leftText="Lorem Ipsam" />,
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
    {
      original: "",
      custom: "",
    },
    {
      original: "",
      custom: "",
    },
    {
      original: "",
      custom: "",
    },
    {
      original: "",
      custom: "",
    },
  ];
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Receipt information</h1>
      </WordingHeader>
      <Table className="wording-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default ReceiptInformation;
