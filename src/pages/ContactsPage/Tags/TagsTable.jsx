/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import TagsModal from 'components/molecules/Contacts/Modals/TagsModal/mainmodal/index';
import TagsEmptyState from 'components/molecules/EmptyState/Contacts/Tags';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns } from 'utilities/tagsData';
import { TableWrapper } from './styles';

function TagsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const tag = [];
  return (
    <>
      <TagsModal isShown={open} onClose={() => setOpen(false)} />
      {!!tag.length ? (
        <div>
          <TableWrapper>
            <TableHeader title="Create Tag" header="64 Tags" setOpen={setOpen} />
            <Table
              columns={columns}
              data={tag}
              // onRowClicked={onRowClicked}
            />
          </TableWrapper>
          <Pagination currentPage={currentPage} data={tag} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <TagsEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default TagsTable;
