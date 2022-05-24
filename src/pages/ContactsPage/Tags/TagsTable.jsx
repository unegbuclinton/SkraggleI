import Table from 'components/layouts/Table';
import TagsModal from 'components/molecules/Contacts/Modals/TagsModal/mainmodal/index';
// import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { viewTags } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from 'utilities/tagsData';
import { TableWrapper } from './styles';

function TagsTable() {
  const { tagsData } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewTags());
  }, []);

  const [open, setOpen] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // const indexLasttList = currentPage * itemsPerPage;

  // const indexFirstList = indexLasttList - itemsPerPage;

  // const currentList = data.slice(indexFirstList, indexLasttList);

  return (
    <div>
      <TableWrapper>
        <TableHeader title="Create Tag" header={`${tagsData.length} Tags`} setOpen={setOpen} />
        <Table columns={columns} data={tagsData} />
      </TableWrapper>
      <TagsModal isShown={open} onClose={() => setOpen(false)} />
      {/* <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={tagsData}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}

export default TagsTable;
