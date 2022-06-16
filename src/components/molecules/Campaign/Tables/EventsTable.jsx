import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { React, useState } from 'react';
import { EventsData } from 'utilities/campaigndata';
import CreateCampaignModal from '../CreateCampaignModal';
import { ContainerBody, TableWrapper, Wrapper } from './styles';

const EventsTable = () => {
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'ID',
      selector: (row) => row.uid
      // width: '20rem'
    },

    {
      name: 'NAME',
      selector: (row) => row.name
      // width: '45rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.campaign
      // width: '30rem'
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    }
  ];
  const [open, setOpen] = useState(false);
  // const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexLastList = currentPage * itemsPerPage;

  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = EventsData.map((eventsData, index) => ({
    key: index,
    uid: eventsData.uid,
    name: eventsData.name,
    campaign: eventsData.campaign,
    status: eventsData.status
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  // let navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/events');
  // };

  return (
    <Wrapper>
      <CreateCampaignModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Create New"
            header={`34 Events`}
            setOpen={setOpen}
            // setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={currentList}
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
        data={EventsData}
        setCurrentPage={setCurrentPage}
      />
    </Wrapper>
  );
};

export default EventsTable;
