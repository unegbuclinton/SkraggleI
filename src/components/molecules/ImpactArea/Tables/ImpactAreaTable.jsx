/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import Card from 'components/atoms/Card';
import CheckBox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import ImpactAreaEmptyState from 'components/molecules/EmptyState/ImpactArea/main';
import Pagination from 'components/molecules/Pagination/index';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImpactAreaData } from 'utilities/impactAreaData';
import ImpactAreaModal from '../Modals/impactAreaModal';

function ImpactAreaTable() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);

  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {};

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const onRowClicked = (row) => {
    let path = `/impact-area/${row.id}`;
    navigate(path);
  };

  const columns = [
    {
      name: 'NAME',
      selector: (row) => row.name
    },
    {
      name: 'TRANSACTIONS',
      selector: (row) => row.transactions
    },
    {
      name: 'VOLUNTEERING',
      selector: (row) => row.volunteering
    },
    {
      name: 'FORMS',
      selector: (row) => row.forms
    }
  ];

  const tableData = ImpactAreaData.map((impactAreaData, index) => ({
    key: index,
    id: impactAreaData.id,
    name: impactAreaData.name,
    transactions: impactAreaData.transactions,
    volunteering: impactAreaData.volunteering,
    forms: impactAreaData.forms
  }));

  return (
    <>
      <ImpactAreaModal isShown={open} onClose={() => setOpen(false)} />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these impact area permanently from your Skraggle account. This
    action cannot be undone"
      />
      {!!tableData?.length ? (
        <TableWrapper>
          <TableHeader
            title="New Impact Area"
            header={`${tableData?.length} Impact Areas`}
            setOpen={setOpen}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
          />
          <Table
            columns={columns}
            data={tableData}
            onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={CheckBox}
            handleRowSelect={handleSelect}
          />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            data={tableData}
            setCurrentPage={setCurrentPage}
          />
        </TableWrapper>
      ) : (
        <ImpactAreaEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default ImpactAreaTable;

export const TableWrapper = styled(Card)`
  padding: 2.4rem;
  margin-top: 1.6rem;
  height: 100%;
  overflow: auto;
`;
