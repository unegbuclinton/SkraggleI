import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getAllCampaigns, getFormsByID } from 'features/campaign/campaignSlice';
import { getSingleForm, removeForm } from 'features/forms/formsSlice';
import CreateFormModal from 'pages/Forms/FormModal/CreateFormModal';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CampaignForm } from 'utilities/campaigndata';
import { capitalizeFirstLowercaseRest } from 'utilities/helpers';
import { ContainerBody, TableWrapper } from './styles';

const FormsTable = () => {
  const { formsData } = useSelector((state) => state.campaign);
  const { campaignByID } = useSelector((state) => state.campaign);
  const id = campaignByID.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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

  const onRowClicked = ({ id }) => {
    dispatch(getAllCampaigns(id));
    dispatch(getSingleForm(id));
    let path = '/forms/forms-details';
    navigate(path);
  };

  const columns = [
    {
      name: 'FORM NAME',
      selector: (row) => row?.name
    },

    {
      name: 'FORM TYPE',
      selector: (row) => row?.type
    },
    {
      name: 'RAISED',
      selector: (row) => row?.amount_raised || 0
    },
    {
      name: 'DONATIONS',
      selector: (row) => row?.donations
    },
    {
      name: 'STATUS',
      cell: (row) => {
        return (
          <Button className="table-button">{capitalizeFirstLowercaseRest(row?.status)}</Button>
        );
      }
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
            noFilter
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={formsData}
            onRowClicked={onRowClicked}
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
