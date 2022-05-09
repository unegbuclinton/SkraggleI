import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import React, { useState } from 'react';
import { columns, data } from 'utilities/TodosData';
import ProfileLayOut from '..';
import { TableHeading, TableWrapper } from './styles';

function TodosTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);
  return (
    <ProfileLayOut heading="To-Do&#39;s">
      <TableWrapper>
        <TableHeading>
          <h2 className="heading">5 To-Do</h2>
        </TableHeading>
        <Table columns={columns} data={currentList} />
      </TableWrapper>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={data}
        setCurrentPage={setCurrentPage}
      />
    </ProfileLayOut>
  );
}

export default TodosTable;
