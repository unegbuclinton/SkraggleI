import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeleteFieldModal from 'components/molecules/EventsModals/FieldsModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
// import FieldDropdown from '../DropdownComponents/FieldsDropdown';
import CreateNewFieldModals from '../EventModals/CreateNewFieldModals';
import { ActionWrapper, ContentsWrapper, FieldWrapper } from './styles';

function Fields() {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const openDelete = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const columns = [
    {
      name: 'NAME',
      cell: () => (
        <ContentsWrapper>
          <h2 className="heading">Trial label</h2>
          <p className="heading-text">DisplayLabel</p>
        </ContentsWrapper>
      ),
      width: '20.8rem'
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
      selector: (row) => row.ownLine,
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
      cell: () => (
        <ActionWrapper>
          <p className="delete" onClick={openDelete}>
            Delete
          </p>
        </ActionWrapper>
      )
    }
  ];

  const data = [
    {
      name: 'NAME',
      status: '',
      required: 'No',
      ownLine: 'Yes',
      type: 'Text box'
    }
  ];

  const onRowClick = () => {
    setDropdown(true);
  };

  return (
    <FieldWrapper>
      <DeleteFieldModal isShown={open} onClose={() => setOpen(false)} />
      <TableHeader header="Fields" title="Create New" setOpen={setDropdown} />
      <Table columns={columns} data={data} onRowClicked={onRowClick} />
      {dropdown && <CreateNewFieldModals isShown={dropdown} onClose={() => setDropdown(false)} />}
    </FieldWrapper>
  );
}

export default Fields;
