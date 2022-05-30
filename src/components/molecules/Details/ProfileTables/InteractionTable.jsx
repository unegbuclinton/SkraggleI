import Table from 'components/layouts/Table';
import InteractionModal from 'components/molecules/Contacts/SubModals/Interactions';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns, data } from 'utilities/interactionData';
import ProfileLayOut from '..';
import { TableWrapper } from './styles';

function InteractionTable() {
  const [open, setOpen] = useState(false);
  return (
    <ProfileLayOut heading="Interactions">
      <TableWrapper>
        <TableHeader
          subMenuTableHeader
          header=" 5 Interactions"
          title="Add Interaction"
          setOpen={setOpen}
        />
        <Table columns={columns} data={data} />
      </TableWrapper>
      {open && <InteractionModal isShown={open} onClose={() => setOpen(false)} />}
    </ProfileLayOut>
  );
}

export default InteractionTable;
