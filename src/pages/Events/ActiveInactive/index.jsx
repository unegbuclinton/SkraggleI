import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import ArchiveModal from 'components/molecules/EventsModals/ArchiveModal/Modal';
import CloneEventModal from 'components/molecules/EventsModals/CloneModal/Modal';
import CreateEventModal from 'components/molecules/EventsModals/CreateEventModal/Modal';
import DeleteEventModal from 'components/molecules/EventsModals/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { DPIconEventActive } from 'icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionWrapper, ActiveInactiveWrapper, Container } from './styles';

function ActiveInactive() {
  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onRowClicked = (row) => {
    navigate('events-details', { state: row });
  };

  const openCloneModal = (e) => {
    e.stopPropagation();
    setCloneEventOpen(true);
  };

  const openDelete = (e) => {
    e.stopPropagation();
    setOpenDeleteModal(true);
  };

  const openArchive = (e) => {
    e.stopPropagation();
    setOpenArchiveModal(true);
  };

  const columns = [
    {
      name: 'NAME',
      selector: (row) => row.name,
      width: '23rem'
    },

    {
      name: 'STATUS',
      cell: () => <Switch />,
      width: '10rem'
    },

    {
      name: 'COPY URL',
      cell: () => <DPIconEventActive />,
      width: '10rem'
    },

    {
      name: 'BEGGINS',
      selector: (row) => row.beggin,
      width: '15rem'
    },

    {
      name: 'ATTENDEES',
      selector: (row) => row.attendee,
      width: '20rem'
    },
    {
      name: '',
      cell: () => (
        <ActionWrapper>
          <p className="action" onClick={onRowClicked}>
            Edit
          </p>
          <p className="action" onClick={openCloneModal}>
            Clone
          </p>
          <p className="action" onClick={openArchive}>
            Archive
          </p>
          <p className="delete" onClick={openDelete}>
            Delete
          </p>
        </ActionWrapper>
      ),
      width: '30rem'
    }
  ];

  const data = [
    {
      name: 'A day with the orphans',
      switch: '',
      beggin: '09/15/2021',
      attendee: '1(View all)',
      action: ''
    },
    {
      name: 'A day with the elderly',
      switch: '',
      beggin: '09/15/2021',
      attendee: '1(View all)',
      action: ''
    },
    {
      name: 'A day with the orphans copy',
      switch: '',
      beggin: '09/15/2021',
      attendee: '1(View all)',
      action: ''
    }
  ];

  return (
    <ActiveInactiveWrapper>
      <Container>
        <CreateEventModal isShown={open} onClose={() => setOpen(false)} />
        <CloneEventModal isShown={openCloneEvent} onClose={() => setCloneEventOpen(false)} />
        <DeleteEventModal isShown={openDeleteModal} onClose={() => setOpenDeleteModal(false)} />
        <ArchiveModal isShown={openArchiveModal} onClose={() => setOpenArchiveModal(false)} />
        <TableHeader header="92 Events" title="Create New" eventHeader setOpen={setOpen} />
        <Table className="events-table" columns={columns} onRowClicked={onRowClicked} data={data} />
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
