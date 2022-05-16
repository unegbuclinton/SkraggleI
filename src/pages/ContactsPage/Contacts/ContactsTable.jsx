import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { viewContact } from 'features/contact/contactslice';
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

  const data = contactData.map((contact) => {
    return {
      fullName: contact.fullname,
      primaryEmail: contact.primary_email,
      primaryPhone: contact.primary_phone
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

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
        <Table columns={columns} data={currentList} onRowClicked={onRowClicked} />
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
