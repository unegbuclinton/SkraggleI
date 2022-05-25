/* eslint-disable no-extra-boolean-cast */
import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import CompanyModal from 'components/molecules/Contacts/Modals/CompanyModal/MainModal/index';
import CompaniesEmptyState from 'components/molecules/EmptyState/Contacts/Companies';
import Pagination from 'components/molecules/Pagination';
// import { useNavigate } from "react-router-dom";
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { searchCompanies } from 'features/contact/contactSlice';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper } from './styles';

function CompaniesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const { companies } = useSelector((state) => state.contact);

  const getSearchDebounce = useCallback(
    debounce(() => {
      dispatch(searchCompanies({ search: input, page: 0 }));
    }, 500),
    [input]
  );
  useEffect(() => {
    getSearchDebounce();

    return getSearchDebounce.cancel;
  }, [input]);
  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '8rem'
    },
    {
      name: 'COMPANY NAME',
      selector: (row) => {
        return row.company_name;
      },
      width: '23.769rem'
    },

    {
      name: 'PRIMARY PHONE',
      selector: (row) => {
        return row.primary_phone;
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
      {!!companies?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Company"
              header="24 Companies"
              setOpen={setOpen}
              onChange={(e) => setInput(e.target.value)}
            />
            <CompanyModal
              isShown={open}
              onClose={() => {
                setOpen(false);
              }}
            />
            <Table columns={columns} data={companies} />
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
