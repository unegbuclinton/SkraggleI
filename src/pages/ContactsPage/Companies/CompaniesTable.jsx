/* eslint-disable no-extra-boolean-cast */
import { companiesSearch } from 'api/contacts/search';
import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import CompanyModal from 'components/molecules/Contacts/Modals/CompanyModal/MainModal/index';
import CompaniesEmptyState from 'components/molecules/EmptyState/Contacts/Companies';
import Pagination from 'components/molecules/Pagination';
// import { useNavigate } from "react-router-dom";
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { data } from 'utilities/CompaniesData';
import { TableWrapper } from './styles';

function CompaniesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const { companies } = useSelector((state) => state.contact);
  // const itemsPerPage = 5;

  const getSearchDebounce = useCallback(
    debounce(() => {
      companiesSearch(input);
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
      {!!companies ? (
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
            <Table
              columns={columns}
              data={companies}
              // onRowClicked={onRowClicked}
            />
          </TableWrapper>

          <Pagination
            currentPage={currentPage}
            // itemsPerPage={itemsPerPage}
            data={companies}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <CompaniesEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default CompaniesTable;
