/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import ContactEmptyState from 'components/molecules/EmptyState/Contacts/Contact';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { columns } from 'utilities/contactsData';
import { TableWrapper } from './styles';

function ContactsTable() {
  const { contactData } = useSelector((state) => state.contact);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onRowClicked = () => {
    let path = 'contact-profile';
    navigate(path);
  };

  return (
    <>
      <ContactsModal isShown={open} onClose={() => setOpen(false)} />
      {!!contactData.length ? (
        <div>
          <TableWrapper>
            <TableHeader title="Add Contacts" header="88 Contacts" setOpen={setOpen} />
            <Table columns={columns} data={contactData} onRowClicked={onRowClicked} />
          </TableWrapper>

          <Pagination
            currentPage={currentPage}
            data={contactData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <ContactEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default ContactsTable;
