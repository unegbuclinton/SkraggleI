import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateFormModal from '../FormModal/CreateFormModal';
import { TableWrapper } from './styles';

function FormsTable() {
  const { allForm } = useSelector((state) => state.forms);

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const onRowClicked = () => {
    let path = 'url';
    navigate(path);
  };

  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '8rem'
    },

    {
      name: 'FORM NAME',
      selector: (row) => row.name,
      width: '23.769rem'
    },

    {
      name: 'FORM TYPE',
      selector: (row) => row.type,
      width: '13.769rem'
    },

    {
      name: 'RAISED',
      selector: (row) => row.amount_raised
    },

    {
      name: 'DONATIONS',
      selector: (row) => row.donation_amount,
      width: '25.027rem'
    },

    {
      name: 'STATUS',
      cell: () => <TableBtn active />,
      width: '30.8rem'
    }
  ];
  return (
    <TableWrapper>
      <TableHeader header={`${allForm.length} Form`} title="Create New" setOpen={setOpenModal} />
      <Table columns={columns} onRowClicked={onRowClicked} data={allForm} />
      {openModal && <CreateFormModal isShown={openModal} onClose={() => setOpenModal(false)} />}
    </TableWrapper>
  );
}

export default FormsTable;
