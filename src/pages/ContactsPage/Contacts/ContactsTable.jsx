import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { viewContact } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableWrapper } from './styles';

function ContactsTable() {
  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '3rem'
    },
    {
      name: 'FULL NAME',
      selector: (row) => row.fullname,
      width: '16.8rem'
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primary_email,
      width: '30.8rem'
    },
    {
      name: 'PRIMARY PHONE',
      selector: (row) => row.primary_phone,

      Width: '27.173rem'
    },
    {
      name: 'TAGS',
      cell: () => <TableBtn />
    }
  ];
  const { contactData } = useSelector((state) => state.contact);
  console.log(contactData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewContact());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
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

      <Pagination currentPage={currentPage} data={contactData} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default ContactsTable;
