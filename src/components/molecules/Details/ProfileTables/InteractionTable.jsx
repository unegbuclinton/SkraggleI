import Table from 'components/layouts/Table';
import InteractionModal from 'components/molecules/Contacts/SubModals/Interactions';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import ProfileLayOut from '..';
import { TableWrapper } from './styles';

function InteractionTable() {
  const { interactionData } = useSelector((state) => state.contact);

  const [open, setOpen] = useState(false);
  const columns = [
    {
      name: 'Subject',
      selector: (row) => row.subject,
      width: '36rem'
    },

    {
      name: 'Type',
      selector: (row) => row.type,
      width: '12.7rem'
    },
    {
      name: 'Date',
      selector: (row) => formatDate(row.interacted_at)
    }
  ];

  return (
    <ProfileLayOut heading="Interactions">
      <TableWrapper>
        <TableHeader
          subMenuTableHeader
          header={`${interactionData.length} Interactions`}
          title="Add Interaction"
          setOpen={setOpen}
        />
        <Table columns={columns} data={interactionData} />
      </TableWrapper>
      {open && <InteractionModal isShown={open} onClose={() => setOpen(false)} />}
    </ProfileLayOut>
  );
}

export default InteractionTable;
