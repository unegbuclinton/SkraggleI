import React, { useState } from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/contactsData";
import { TableWrapper } from "./styles";
import TableHeader from "../TableHeader/TableHeader";
import Pagination from "components/molecules/Pagination/index";
import { useNavigate } from "react-router-dom";
import ContactsModal from "./Modals/ContactsModal";

function ContactsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  const navigate = useNavigate();

  const onRowClicked = () => {
    let path = "/contact-profile";
    navigate(path);
  };

  return (
    <div>
      <TableWrapper>
        <TableHeader
          title="Add Contacts"
          header="88 Contacts"
          setOpen={setOpen}
        />
        <ContactsModal isShown={open} onClose={() => setOpen(false)} />
        <Table
          columns={columns}
          data={currentList}
          onRowClicked={onRowClicked}
        />
      </TableWrapper>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={data}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ContactsTable;
