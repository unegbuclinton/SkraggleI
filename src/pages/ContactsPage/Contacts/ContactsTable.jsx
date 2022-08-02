/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import CheckBox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import ContactsModal from 'components/molecules/Contacts/Modals/CreateContact/ContactsModal/index';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import ContactEmptyState from 'components/molecules/EmptyState/Contacts/Contact';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import {
  eachInteraction,
  eachTodo,
  getEachVolunteer,
  oneContact,
  removeContact,
  smartAsk,
  // smartAsk,
  viewContact
} from 'features/contact/contactSlice';
// import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableWrapper } from './styles';

function ContactsTable() {
  // const [input, setInput] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const { contactData } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      contacts: getId
    };
    dispatch(removeContact(body)).then(() => {
      dispatch(viewContact());
      setGetId([]);
    });
  };

  // const getSearchDebounce = useCallback(
  //   debounce(() => {
  //     dispatch(searchContact({ search: input, pdispatchage: 0 }));
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
    dispatch(eachTodo(id));
    dispatch(getEachVolunteer(id));
    dispatch(eachInteraction(id));
    dispatch(smartAsk(id));
    let path = `/contacts/${id}`;
    navigate(path);
  };
  const columns = [
    {
      name: 'FULL NAME',
      selector: (row) => row.first_name + ' ' + row.last_name,
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
      // selector: (row) => row.tags
      cell: (row) => <TableBtn tags={row.tags} />
    }
  ];

  return (
    <>
      <ContactsModal isShown={open} onClose={() => setOpen(false)} />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these contacts permanently from your Skraggle account. This
        action cannot be undone"
      />
      {!!contactData?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Contacts"
              header={`${contactData?.length} Contacts`}
              setOpen={setOpen}
              setOpenDeleteModal={setOpenDeleteModal}
              selectRow={`${rowCount} Selected`}
              show={!!getId.length}
              // onChange={(e) => setInput(e.target.value)}
            />
            <Table
              columns={columns}
              data={contactData}
              onRowClicked={onRowClicked}
              selectableRows
              selectableRowsComponent={CheckBox}
              handleRowSelect={handleSelect}
              pointer
            />
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
