import React, { useState } from "react";
import Table from "components/layouts/Table";
import { contactsColumns, contactsData } from "utilities/contactsData";
import { TableWrapper } from "./styles";
import TableHeader from "../TableHeader/TableHeader";
import Pagination from "components/molecules/Pagination/index";

function ContactsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = contactsData.slice(indexFirstList, indexLasttList);

  return (
    <div>
      <TableWrapper>
        <TableHeader title="Add Contacts" header="88 Contacts" />
        <Table columns={contactsColumns} data={currentList} />
      </TableWrapper>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        contactsData={contactsData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ContactsTable;
