import React, { useState } from "react";
import EventsForm from "components/molecules/EventsWordingForm";
import TableRowRight from "./TableRowRight";

function RightRowData() {
  const [click, setClick] = useState(false);
  return (
    <div>
      {click ? (
        <EventsForm setClick={setClick} />
      ) : (
        <TableRowRight
          setClick={setClick}
          rightText="Click to set custom text"
        />
      )}
    </div>
  );
}

export default RightRowData;
