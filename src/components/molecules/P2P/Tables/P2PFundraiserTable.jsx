import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getEachP2p, removeP2P, viewP2P } from 'features/p2p/p2pSlice';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import P2PModalComponent from '../P2PFundraiserModalComponent';
import { ContainerBody, TableWrapper } from './styles';

function P2PTable() {
  const { p2pData } = useSelector((state) => state.p2p);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      ids: getId
    };
    dispatch(removeP2P(body)).then(() => {
      dispatch(viewP2P());
      setGetId([]);
    });
  };

  const columns = [
    {
      name: 'CAMPAIGN',
      selector: (row) => row.name || row.campaign_id
    },

    {
      name: 'FUNDRAISER',
      selector: (row) => row.fundraiser_display_name
    },
    {
      name: 'GOAL',
      selector: (row) => row.goal
    },
    {
      name: 'RAISED',
      selector: (row) => row.offline_amount
    },
    {
      name: 'CREATED',
      selector: (row) => row.created_at
    },
    {
      name: 'GOAL DATE',
      selector: (row) => row.goal_date
    },
    {
      name: '1M STATISTICS -_-_',
      selector: (row) => row.sn
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRowClicked = (row) => {
    dispatch(getEachP2p(row?.id)).then(() => {
      navigate(`/peer-to-peer/${row?.id}`, { state: row });
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <P2PModalComponent
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these P2P permanently from your Skraggle account. This
        action cannot be undone"
      />
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Add Contacts"
            header={`${p2pData?.length} P2P`}
            setOpen={setOpen}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            openDeleteModal={openDeleteModal}
            // onChange={(e) => setInput(e.target.value)}
          />

          <Table
            columns={columns}
            data={p2pData}
            onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination currentPage={currentPage} data={p2pData} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default P2PTable;
