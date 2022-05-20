import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
// import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { viewContact } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { columns } from 'utilities/contactsData';
import { TableWrapper } from './styles';

function ContactsTable() {
  const { contactData } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewContact());
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onRowClicked = () => {
    let path = 'contact-profile';
    navigate(path);
  };

  return (
    <div>
      <TableWrapper>
        <TableHeader title="Add Contacts" header="88 Contacts" setOpen={setOpen} />
        <ContactsModal isShown={open} onClose={() => setOpen(false)} />
        <Table columns={columns} data={contactData} onRowClicked={onRowClicked} />
      </TableWrapper>

      {/* <Pagination currentPage={currentPage} data={contactData} setCurrentPage={setCurrentPage} /> */}
    </div>
  );
}

export default ContactsTable;
