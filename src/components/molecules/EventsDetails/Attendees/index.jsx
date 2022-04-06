import React, { useState } from "react";
import Table from "components/layouts/Table";
import { data, columns } from "utilities/AttendeeData";
import { AttendeeWrapper } from "./styles";
import RegistrationPackage from "../RegistrationPackage";

function Attendees() {
  const [click, setClick] = useState(false);

  return (
    <AttendeeWrapper>
      {click ? (
        <RegistrationPackage />
      ) : (
        <Table
          data={data}
          onRowClicked={() => setClick((prev) => !prev)}
          columns={columns}
        />
      )}
    </AttendeeWrapper>
  );
}

export default Attendees;
