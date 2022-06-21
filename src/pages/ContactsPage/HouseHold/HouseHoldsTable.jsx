/* eslint-disable no-extra-boolean-cast */
import CheckBox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import HouseHoldModal from 'components/molecules/Contacts/Modals/houseHoldModal/mainModal/index';
import HouseHoldEmptyState from 'components/molecules/EmptyState/Contacts/HouseHolds';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { allHouseHold, removeHouseHold } from 'features/contact/contactSlice';
// import { searchHouseHold } from 'features/contact/contactSlice';
// import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import { TableWrapper } from './styles';

function HouseHoldsTable() {
  const { houseHolds, isLoading } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [getId, setGetId] = useState('');
  const [rowCount, setRowCount] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };
  const handleDelete = () => {
    const body = {
      households: getId
    };
    dispatch(removeHouseHold(body)).then(() => {
      dispatch(allHouseHold());
      setGetId([]);
    });
  };

  // const [input, setInput] = useState('');
  // const dispatch = useDispatch();
  // const getSearchDebounce = useCallback(
  //   debounce(() => {
  //     dispatch(searchHouseHold({ search: input, page: 0 }));
  //   }, 500),
  //   [input]
  // );
  // useEffect(() => {
  //   getSearchDebounce();
  //   return getSearchDebounce.cancel;
  // }, [input]);

  const columns = [
    {
      name: 'NAME',
      selector: (row) => {
        return row?.name;
      },
      width: '33.5769rem'
    },
    {
      name: 'CREATED',
      selector: (row) => {
        return formatDate(row?.created_on);
      },
      width: '54.9rem'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HouseHoldModal isShown={open} onClose={() => setOpen(false)} />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these household permanently from your Skraggle account. This
        action cannot be undone"
      />
      {!!houseHolds?.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Household"
              header={`${houseHolds.length} Households`}
              selectRow={`${rowCount} Selected`}
              setOpen={setOpen}
              setOpenDeleteModal={setOpenDeleteModal}
              show={!!getId.length}
              // onChange={(e) => setInput(e.target.value)}
            />
            <Table
              columns={columns}
              data={houseHolds}
              selectableRows
              selectableRowsComponent={CheckBox}
              handleRowSelect={handleSelect}
              progressComponent={<Spinner />}
              progressPending={isLoading}
            />
          </TableWrapper>
          <Pagination currentPage={currentPage} data={houseHolds} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <HouseHoldEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

const Spinner = () => {
  return <div>Loading..... </div>;
};

export default HouseHoldsTable;
