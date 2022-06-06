import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import dayjs from 'dayjs';
import {
  delCampaign,
  getAllCampaigns,
  getPeerToPeer,
  singleCampaign
} from 'features/campaign/campaignSlice';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableContacts } from 'utilities/campaigndata';
import CreateCampaignModal from '../CreateCampaignModal';
import { ContainerBody, TableWrapper } from './styles';

const CampaignTable = () => {
  const { campaigns } = useSelector((state) => state.campaign);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      campaigns: getId
    };
    dispatch(delCampaign(body)).then(() => {
      dispatch(getAllCampaigns());
    });
  };
  const columns = [
    // {
    //   name: ' ',
    //   cell: () => <Checkbox />,
    //   ignoreRowClick: false,
    //   width: '5rem'
    // },
    {
      name: 'CREATED',
      selector: (row) => {
        return dayjs(row?.created_on).format('DD MMM YYYY');
      },
      width: '20rem'
    },

    {
      name: 'CAMPAIGN',
      selector: (row) => row?.name
    },
    {
      name: 'STATUS',
      selector: (row) => row?.status,
      cell: () => <Button className="table-button">Active</Button>
    },
    {
      name: 'FUNDRAISING GOALS',
      selector: (row) => row?.fundraising_goal.toLocaleString()
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onRowClicked = ({ id }) => {
    dispatch(getPeerToPeer(id));
    dispatch(singleCampaign(id));
    let path = 'campaign-details';
    navigate(path);
    // navigate(`/campaign/${row.key + 1}`, { state: row });
  };

  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div>
      <CreateCampaignModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these campaign permanently from your Skraggle account. This
        action cannot be undone"
      />
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Add Contacts"
            header={`${campaigns?.length} Campaign`}
            setOpen={setOpen}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={campaigns}
            onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        // itemsPerPage={itemsPerPage}
        data={TableContacts}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CampaignTable;
