import Table from 'components/layouts/Table';
import TagsModal from 'components/molecules/Contacts/Modals/TagsModal/mainmodal/index';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns, data } from 'utilities/tagsData';
import { TableWrapper } from './styles';

function TagsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  return (
    <div>
      <TableWrapper>
        <TableHeader title="Create Tag" header="64 Tags" setOpen={setOpen} />
        <Table
          columns={columns}
          data={currentList}
          // onRowClicked={onRowClicked}
        />
      </TableWrapper>
      <TagsModal isShown={open} onClose={() => setOpen(false)} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={data}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default TagsTable;
