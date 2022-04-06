import Table from "components/layouts/Table";
import React from "react";
import { WordingHeader, WordingWrapper } from "./styles";

function Description() {
  const columns = [
    {
      name: "ORIGINAL",
      selector: (row) => row.original,
      width: "51.6rem",
    },

    {
      name: "CUSTOM",
      selector: (row) => row.custom,
    },
  ];
  const data = [
    {
      original: "Required",
      custom: "Click to set custom text",
    },
  ];
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Description</h1>
      </WordingHeader>
      <Table className="description-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default Description;
