import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { viewContact } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { columns } from 'utilities/contactsData';
import { TableWrapper } from './styles';

function ContactsTable() {
  const { contactData } = useSelector((state) => state.contact);

  const [q, setQ] = useState('');

  // const [searchColumns, setSearchColumns] = useState('fullname', 'primary_email', 'primary_phone');
  // setSearchColumns();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewContact());
  }, []);

  const search = (rows) => {
    return rows.filter(
      (row) =>
        // searchColumns.some(
        //   (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        // )
        row.fullname.toLowerCase().indexOf(q) > -1 ||
        row.primary_email.toLowerCase().indexOf(q) > -1 ||
        row.primary_phone.toLowerCase().indexOf(q) > -1
    );
  };

  // const columnss = contactData[0] && Object.keys(contactData[0]);
  // console.log(columnss);
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
        <TableHeader
          title="Add Contacts"
          header="88 Contacts"
          setOpen={setOpen}
          onChange={(e) => setQ(e.target.value)}
          value={q}
        />
        <ContactsModal isShown={open} onClose={() => setOpen(false)} />
        <Table columns={columns} data={search(contactData)} onRowClicked={onRowClicked} />
      </TableWrapper>

      <Pagination currentPage={currentPage} data={contactData} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default ContactsTable;
