import React, { useState } from "react";
import Table from "components/layouts/Table";
import EventsForm from "components/molecules/EventsWordingForm";
import { WordingHeader, WordingWrapper } from "./styles";
import TableRowLeft from "../tableRow/TableRowLeft";
import TableRowRight from "../tableRow/TableRowRight";
function EventInformation() {
  const [click, setClick] = useState(false);

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
      cell: () => (
        <div>
          {click ? (
            <EventsForm />
          ) : (
            <TableRowRight
              setClick={setClick}
              rightText="Click to set custom text"
            />
          )}
        </div>
      ),
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
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Event information</h1>
      </WordingHeader>
      <Table className="wording-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default EventInformation;
