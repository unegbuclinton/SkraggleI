import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeleteFieldModal from 'components/molecules/EventsModals/FieldsModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
// import { delField } from 'features/events/eventSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import FieldDropdown from '../DropdownComponents/FieldsDropdown';
import CreateNewFieldModals from '../EventModals/CreateNewFieldModals';
import { ActionWrapper, FieldWrapper } from './styles';

const Paragraph = ({ row }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2.4rem', color: '#2e2e2e', fontWeight: '400' }}>{row.field_label}</h1>

      <p
        style={{
          fontSize: '1.4rem',
          color: '#585858',
          fontWeight: '400'
        }}>
        {row.reporting_label}
      </p>
    </div>
  );
};

const Delete = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <ActionWrapper> Delete</ActionWrapper>
    </div>
  );
};

function Fields() {
  const { allFields } = useSelector((state) => state.events);

  // const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const columns = [
    {
      name: 'NAME',
      // selector: (row) => row.field_label,
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
      Width: '16.8rem'
    },
    {
      name: 'OWN LINE',
      selector: (row) => row.own_line,
      Width: '16.8rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row.type,
      Width: '16.8rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="action">Edit</p>
        </ActionWrapper>
      )
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: (row) => <Delete row={row} onClick={() => setOpenModal(true)} />
    }
  ];

  const onRowClick = () => {
    setDropdown(true);
  };

  return (
    <FieldWrapper>
      {<DeleteFieldModal isShown={openModal} onCloseModal={() => setOpenModal(false)} />}
      <TableHeader header="Fields" title="Create New" setOpen={setDropdown} />
      <Table columns={columns} data={allFields} onRowClicked={onRowClick} />
      {dropdown && <CreateNewFieldModals isShown={dropdown} onClose={() => setDropdown(false)} />}
    </FieldWrapper>
  );
}

export default Fields;
