/* eslint-disable no-extra-boolean-cast */
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import TagsModal from 'components/molecules/Contacts/Modals/TagsModal/mainmodal/index';
import TagsEmptyState from 'components/molecules/EmptyState/Contacts/Tags';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { removeTag, viewTags } from 'features/contact/contactSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from 'utilities/tagsData';
import { TableWrapper } from './styles';

function TagsTable() {
  const { tagsData } = useSelector((state) => state.contact);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      tags: getId
    };
    dispatch(removeTag(body)).then(() => {
      dispatch(viewTags());
      setGetId([]);
    });
  };

  return (
    <>
      <TagsModal isShown={open} onClose={() => setOpen(false)} />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these Tag permanently from your Skraggle account. This
        action cannot be undone"
      />
      {!!tagsData?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Create Tag"
              header={`${tagsData.length} Tags`}
              selectRow={`${rowCount} Selected`}
              setOpen={setOpen}
              setOpenDeleteModal={setOpenDeleteModal}
              show={!!getId.length}
            />
            <Table
              columns={columns}
              data={tagsData}
              content
              selectableRows
              selectableRowsComponent={Checkbox}
              handleRowSelect={handleSelect}
            />
          </TableWrapper>
          <Pagination currentPage={currentPage} data={tagsData} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <TagsEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default TagsTable;
