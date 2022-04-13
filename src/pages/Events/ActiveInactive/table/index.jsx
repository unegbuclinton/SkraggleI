import Table from "components/layouts/Table";
import React from "react";
import ActiveInactive from "..";

function ActiveTable() {
  const columns = [
    {
      name: "",
      selector: (row) => row.original,
      cell: () => <ActiveInactive />,
      //   width: "57rem",
    },
  ];

  const data = [
    {
      original: "",
      custom: "",
    },
    {
      original: "",
      action: "",
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
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ActiveTable;
