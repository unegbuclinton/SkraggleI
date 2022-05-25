/* eslint-disable no-extra-boolean-cast */
import CheckBox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import HouseHoldModal from 'components/molecules/Contacts/Modals/houseHoldModal/mainModal/index';
import HouseHoldEmptyState from 'components/molecules/EmptyState/Contacts/HouseHolds';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { searchHouseHold } from 'features/contact/contactSlice';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import { TableWrapper } from './styles';
function HouseHoldsTable() {
  const { houseHolds } = useSelector((state) => state.contact);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const getSearchDebounce = useCallback(
    debounce(() => {
      dispatch(searchHouseHold({ search: input, page: 0 }));
    }, 500),
    [input]
  );
  useEffect(() => {
    getSearchDebounce();
    return getSearchDebounce.cancel;
  }, [input]);

  const columns = [
    {
      name: '',
      cell: () => <CheckBox />,
      width: '8rem'
    },
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
      {!!houseHolds.length ? (
        <div>
          <TableWrapper>
            <TableHeader
              title="Add Household"
              header={`${houseHolds.length} Households`}
              setOpen={setOpen}
              onChange={(e) => setInput(e.target.value)}
            />
            <Table columns={columns} data={houseHolds} />
          </TableWrapper>
          <Pagination currentPage={currentPage} data={houseHolds} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <HouseHoldEmptyState setOpen={setOpen} />
      )}
    </>
  );
}

export default HouseHoldsTable;
