import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns, data } from 'utilities/AttendeeData';
import RegistrationPackage from '../RegistrationPackage';
import { AttendeeWrapper } from './styles';

function Attendees() {
  const [click, setClick] = useState(false);

  return (
    <AttendeeWrapper>
      {click ? (
        <RegistrationPackage setClick={setClick} />
      ) : (
        <>
          <TableHeader
            header="Attendees"
            title="Actions"
            eventHeader
            buttonDropdown
            attendeeDropdown
          />
          <Table data={data} onRowClicked={() => setClick((prev) => !prev)} columns={columns} />
        </>
      )}
    </AttendeeWrapper>
  );
}

export default Attendees;
