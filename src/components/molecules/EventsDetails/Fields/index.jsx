import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeleteFieldModal from 'components/molecules/EventsModals/FieldsModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { delField, getAllFields } from 'features/events/eventSlice';
// import { delField } from 'features/events/eventSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import FieldDropdown from '../DropdownComponents/FieldsDropdown';
import CreateNewFieldModals from '../EventModals/CreateNewFieldModals';
import { ActionText, FieldWrapper, NameContainer } from './styles';

const Paragraph = ({ row }) => {
  return (
    <NameContainer>
      <h1>{row.field_label}</h1>

      <p>{row.reporting_label}</p>
    </NameContainer>
  );
};

function Fields() {
  const { allFields } = useSelector((state) => state.events);
  const [getRowId, setGetRowId] = useState('');

  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const openDelete = (id) => {
    setOpenModal(true);
    setGetRowId(id);
  };
  const deleteField = (id) => {
    const body = {
      ids: [id]
    };
    dispatch(delField(body)).then(() => {
      setOpenModal(false);
      dispatch(getAllFields());
    });
  };

  const columns = [
    {
      name: 'NAME',
      width: '20.8rem',
      cell: (row) => <Paragraph row={row} />
    },
    {
      name: 'STATUS',
      cell: () => <Switch />,
      width: '16.8rem'
    },
    {
      name: 'REQUIRED',
      selector: (row) => row.required,
      width: '16.8rem'
    },
    {
      name: 'OWN LINE',
      selector: (row) => row.own_line,
      width: '16.8rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row.type,
      width: '16.8rem'
    },
    {
      cell: () => <ActionText>Clone</ActionText>,

      width: '8rem'
    },
    {
      cell: (row) => (
        <ActionText red onClick={() => openDelete(row.id)}>
          Delete
        </ActionText>
      ),
      width: '8rem'
    }
  ];

  const onRowClick = () => {
    setDropdown(true);
  };

  return (
    <FieldWrapper>
      {
        <DeleteFieldModal
          isShown={openModal}
          onCloseModal={() => setOpenModal(false)}
          onClick={() => deleteField(getRowId)}
        />
      }
      <TableHeader header="Fields" title="Create New" setOpen={setDropdown} />
      <Table columns={columns} data={allFields} onRowClicked={onRowClick} />
      {dropdown && <CreateNewFieldModals isShown={dropdown} onClose={() => setDropdown(false)} />}
    </FieldWrapper>
  );
}

export default Fields;
