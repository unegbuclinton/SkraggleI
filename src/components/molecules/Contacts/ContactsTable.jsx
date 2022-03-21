import React from "react";
import Table from "components/layouts/Table";
import { contactsColumns, contactsData } from "utilities/contactsData";

function ContactsTable() {
  return (
    <div>
      <Table columns={contactsColumns} data={contactsData} />
    </div>
  );
}

export default ContactsTable;
