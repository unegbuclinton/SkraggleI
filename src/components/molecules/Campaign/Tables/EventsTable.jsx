import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import CreateEventModal from 'components/molecules/EventsModals/CreateEventModal/Modal';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerBody, TableWrapper, Wrapper } from './styles';

const EventsTable = () => {
  const { eventsData } = useSelector((state) => state.campaign);
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'ID',
      selector: (row) => row.campaign_id
      // width: '20rem'
    },

    {
      name: 'NAME',
      selector: (row) => row.name
      // width: '45rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.campaign_id
      // width: '30rem'
    },
    {
      name: 'STATUS',
      cell: () => <Button className="table-button">Active</Button>
    }
  ];
  const [open, setOpen] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  return (
    <Wrapper>
      <CreateEventModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Create New"
            header={`${eventsData.length} Events`}
            setOpen={setOpen}
            // setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={eventsData}
            // onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Wrapper>
  );
};

export default EventsTable;
