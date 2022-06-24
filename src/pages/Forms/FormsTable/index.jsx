import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
// import { getAllCampaigns } from 'features/campaign/campaignSlice';
import { getAllForm, getSingleForm, removeForm } from 'features/forms/formsSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateFormModal from '../FormModal/CreateFormModal';
import { ContainerBody, TableWrapper } from './styles';

function FormsTable() {
  const { allForm } = useSelector((state) => state.forms);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
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
      forms: getId
    };
    dispatch(removeForm(body)).then(() => {
      dispatch(getAllForm());
      setGetId([]);
    });
  };

  const onRowClicked = ({ id }) => {
    // dispatch(getAllCampaigns(id));
    dispatch(getSingleForm(id));
    let path = 'forms-details';
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
      selector: (row) => row?.amount_raised || '0'
    },

    {
      name: 'DONATIONS',
      selector: (row) => row?.donation_amount || '0'
    },

    {
      name: 'STATUS',
      cell: (row) => (
        <Button success pill>
          {row?.status.toUpperCase()}
        </Button>
      )
    }
  ];
  return (
    <div>
      <CreateFormModal
        isShown={openModal}
        onClose={() => {
          setOpenModal(false);
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
            header={`${allForm?.length} Forms`}
            title="Create New"
            setOpen={setOpenModal}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
          />
          <Table
            columns={columns}
            onRowClicked={onRowClicked}
            data={allForm}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
          {/* {openModal && <CreateFormModal isShown={openModal} onClose={() => setOpenModal(false)} />} */}
        </TableWrapper>
      </ContainerBody>
    </div>
  );
}

export default FormsTable;
