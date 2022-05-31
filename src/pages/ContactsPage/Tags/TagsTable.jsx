/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import TagsModal from 'components/molecules/Contacts/Modals/TagsModal/mainmodal/index';
import TagsEmptyState from 'components/molecules/EmptyState/Contacts/Tags';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { columns } from 'utilities/tagsData';
import { TableWrapper } from './styles';

function TagsTable() {
  const { tagsData } = useSelector((state) => state.contact);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <>
      <TagsModal isShown={open} onClose={() => setOpen(false)} />
      {!!tagsData?.length ? (
        <div>
          <TableWrapper>
            <TableHeader title="Create Tag" header={`${tagsData.length} Tags`} setOpen={setOpen} />
            <Table columns={columns} data={tagsData} content />
          </TableWrapper>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            data={tagsData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <TagsEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default TagsTable;
