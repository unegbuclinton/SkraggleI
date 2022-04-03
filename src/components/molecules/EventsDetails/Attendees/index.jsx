import React from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import Table from "components/layouts/Table";
import { data, columns } from "utilities/AttendeeData";
import { AttendeeWrapper } from "./styles";

function Attendees() {
  return (
    <DashboardLayout>
      <AttendeeWrapper>
        <Table data={data} columns={columns} />
      </AttendeeWrapper>
    </DashboardLayout>
  );
}

export default Attendees;
