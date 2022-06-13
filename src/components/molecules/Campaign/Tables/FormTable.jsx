import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getFormsByID } from 'features/campaign/campaignSlice';
import { removeForm } from 'features/forms/formsSlice';
import CreateFormModal from 'pages/Forms/FormModal/CreateFormModal';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CampaignForm } from 'utilities/campaigndata';
import { ContainerBody, TableWrapper } from './styles';

const FormsTable = () => {
  const { formsData } = useSelector((state) => state.campaign);
  const { campaignByID } = useSelector((state) => state.campaign);
  const id = campaignByID.id;
  const dispatch = useDispatch();

  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      forms: getId
    };
    dispatch(removeForm(body)).then(() => {
      dispatch(getFormsByID(id));
      setGetId([]);
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const columns = [
    {
      name: 'FORM NAME',
      selector: (row) => row?.name,
      width: '35rem'
    },

    {
      name: 'FORM TYPE',
      selector: (row) => row?.type,
      width: '20rem'
    },
    {
      name: 'RAISED',
      selector: (row) => row?.raised,
      width: '20rem'
    },
    {
      name: 'DONATIONS',
      selector: (row) => row?.donations,
      width: '35rem'
    },
    {
      name: 'STATUS',
      selector: (row) => row?.status,
      cell: () => <Button className="table-button">Active</Button>
    }
  ];

  return (
    <div>
      <CreateFormModal
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
            title="Create Form"
            header={`${formsData?.length} Forms`}
            setOpen={setOpen}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={formsData}
            // onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination currentPage={currentPage} data={CampaignForm} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default FormsTable;
