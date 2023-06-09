/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import SegmentsModal from 'components/molecules/Contacts/Modals/SegmentsModal/mainModal/index';
import SegmentsEmptyState from 'components/molecules/EmptyState/Contacts/Segments';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns, data } from 'utilities/segmentsData';
import { TableWrapper } from './styles';

function SegmentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  const segment = [];

  return (
    <>
      <SegmentsModal isShown={open} onClose={() => setOpen(false)} />
      {!!segment.length ? (
        <div>
          <TableWrapper>
            <TableHeader title="Create Segments" header="14 Segments" setOpen={setOpen} />
            <Table
              columns={columns}
              data={currentList}
              // onRowClicked={onRowClicked}
            />
          </TableWrapper>

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            data={data}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <SegmentsEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default SegmentsTable;
