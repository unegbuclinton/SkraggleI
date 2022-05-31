/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import TodoModal from 'components/molecules/Contacts/Modals/SubModals/CreateToDo/Modal';
import SubTodosEmptyState from 'components/molecules/EmptyState/ContactSubTabs/Todos';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import { data } from 'utilities/TodosData';
import ProfileLayOut from '..';
import { TableWrapper } from './styles';

function TodosTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [open, setOpen] = useState(false);

  const { todos } = useSelector((state) => state.contact);
  // const indexLasttList = currentPage * itemsPerPage;

  // const indexFirstList = indexLasttList - itemsPerPage;

  // const currentList = data.slice(indexFirstList, indexLasttList);

  const columns = [
    {
      name: 'TO-do',
      selector: (row) => {
        return row.todo;
      },
      width: '16.3rem'
    },

    {
      name: 'RELATED',
      selector: (row) => {
        return row.type;
      },
      width: '15.1rem'
    },
    {
      name: 'Date',
      selector: (row) => {
        return formatDate(row?.created_on);
      },
      width: '15.5rem'
    },

    {
      name: 'STATUS',
      selector: (row) => {
        return row.date;
      },
      width: '15.5rem'
    }
  ];

  return (
    <>
      <TodoModal isShown={open} onClose={() => setOpen(false)} />
      <ProfileLayOut heading="To-Do&#39;s">
        {!!todos.length ? (
          <div>
            <TableWrapper>
              <TableHeader
                subMenuTableHeader
                title="Add To-do"
                header={`${todos.length} To-Do`}
                setOpen={setOpen}
              />
              <Table columns={columns} data={todos} />
            </TableWrapper>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={data}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <SubTodosEmptyState />
        )}
      </ProfileLayOut>
    </>
  );
}

export default TodosTable;
