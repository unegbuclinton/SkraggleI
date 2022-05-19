import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import CompanyModal from 'components/molecules/Contacts/Modals/CompanyModal/MainModal/index';
import LoadingScreen from 'components/molecules/LoadingScreen';
// import { useNavigate } from "react-router-dom";
// import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { data } from 'utilities/CompaniesData';
import { TableWrapper } from './styles';

function CompaniesTable() {
  // const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const { isLoading, companies } = useSelector((state) => state.contact);
  // const itemsPerPage = 5;

  // const indexLasttList = currentPage * itemsPerPage;

  // const indexFirstList = indexLasttList - itemsPerPage;

  // const currentList = data.slice(indexFirstList, indexLasttList);

  // const navigate = useNavigate();

  // const onRowClicked = () => {
  //   let path = "/contact-profile";
  //   navigate(path);
  // };
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
      {isLoading === true && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoadingScreen />
        </div>
      )}

      <TableWrapper>
        <TableHeader title="Add Company" header="24 Companies" setOpen={setOpen} />
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

      {/* <Pagination
        currentPage={currentPage}
        // itemsPerPage={itemsPerPage}
        data={companies}
        setCurrentPage={setCurrentPage}
      /> */}
    </>
  );
}

export default CompaniesTable;
