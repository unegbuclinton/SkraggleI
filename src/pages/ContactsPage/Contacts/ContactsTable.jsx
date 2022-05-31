/* eslint-disable no-extra-boolean-cast */
import CheckBox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import ContactEmptyState from 'components/molecules/EmptyState/Contacts/Contact';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getAllInteractions, oneContact } from 'features/contact/contactSlice';
// import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableWrapper } from './styles';

function ContactsTable() {
  // const [input, setInput] = useState('');
  const { contactData } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  // const getSearchDebounce = useCallback(
  //   debounce(() => {
  //     dispatch(searchContact({ search: input, page: 0 }));
  //   }, 500),
  //   [input]
  // );
  // useEffect(() => {
  //   getSearchDebounce();

  //   return getSearchDebounce.cancel;
  // }, [input]);

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const onRowClicked = ({ id }) => {
    dispatch(oneContact(id));
    dispatch(getAllInteractions(id));
    let path = 'contact-profile';
    navigate(path);
  };
  const columns = [
    {
      name: '',
      cell: () => <CheckBox />,
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

  return (
    <>
      <ContactsModal isShown={open} onClose={() => setOpen(false)} />
      {!!contactData?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Contacts"
              header={`${contactData.length} Contacts`}
              setOpen={setOpen}
              // onChange={(e) => setInput(e.target.value)}
            />
            <Table columns={columns} data={contactData} onRowClicked={onRowClicked} />
          </TableWrapper>

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
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
