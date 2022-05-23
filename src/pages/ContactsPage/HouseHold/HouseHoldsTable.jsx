import { houseHoldSearch } from 'api/contacts/search';
import CheckBox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import HouseHoldModal from 'components/molecules/Contacts/Modals/houseHoldModal/mainModal/index';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import dayjs from 'dayjs';
import debounce from 'lodash.debounce';
// import { getSearchDebounce } from 'features/contact/contactSlice';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TableWrapper } from './styles';

function HouseHoldsTable() {
  const { houseHolds } = useSelector((state) => state.contact);
  const [input, setInput] = useState('');

  const getSearchDebounce = useCallback(
    debounce(() => {
      houseHoldSearch(input);
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
        return dayjs(row?.created_on).format('DD MMM YYYY');
      },
      width: '54.9rem'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  return (
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

      <HouseHoldModal isShown={open} onClose={() => setOpen(false)} />

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={houseHolds}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HouseHoldsTable;
