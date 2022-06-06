/* eslint-disable no-extra-boolean-cast */
import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import CompanyModal from 'components/molecules/Contacts/Modals/CompanyModal/MainModal/index';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import CompaniesEmptyState from 'components/molecules/EmptyState/Contacts/Companies';
import Pagination from 'components/molecules/Pagination';
// import { useNavigate } from "react-router-dom";
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getAllCompanies, removeCompany } from 'features/contact/contactSlice';
// import { searchCompanies } from 'features/contact/contactSlice';
// import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper } from './styles';

function CompaniesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [getId, setGetId] = useState([]);
  const [rowCount, setRowCount] = useState(null);
  // const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const { companies } = useSelector((state) => state.contact);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };
  const handleDelete = () => {
    const body = {
      companies: getId
    };
    dispatch(removeCompany(body)).then(() => {
      dispatch(getAllCompanies());
      setGetId([]);
    });
  };
  // const getSearchDebounce = useCallback(
  //   debounce(() => {
  //     dispatch(searchCompanies({ search: input, page: 0 }));
  //   }, 500),
  //   [input]
  // );
  // useEffect(() => {
  //   getSearchDebounce();

  //   return getSearchDebounce.cancel;
  // }, [input]);
  const columns = [
    {
      name: 'COMPANY NAME',
      selector: (row) => {
        return row.name;
      },
      width: '23.769rem'
    },

    {
      name: 'PRIMARY PHONE',
      selector: (row) => {
        return row.phone;
      },
      width: '30.027rem'
    },
    {
      name: 'TAGS',
      cell: () => <TableBtn />,
      width: '20.8rem'
    }
  ];
  return (
    <>
      <CompanyModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these company permanently from your Skraggle account. This
        action cannot be undone"
      />
      {!!companies?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Company"
              header={`${companies.length} Companies`}
              selectRow={`${rowCount} Selected`}
              setOpen={setOpen}
              setOpenDeleteModal={setOpenDeleteModal}
              show={!!getId.length}
              // onChange={(e) => setInput(e.target.value)}
            />
            <Table
              columns={columns}
              data={companies}
              selectableRows
              selectableRowsComponent={Checkbox}
              handleRowSelect={handleSelect}
            />
          </TableWrapper>

          <Pagination currentPage={currentPage} data={companies} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <CompaniesEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default CompaniesTable;
