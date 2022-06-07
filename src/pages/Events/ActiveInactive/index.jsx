/* eslint-disable no-extra-boolean-cast */
import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import ActiveInactiveEmptyState from 'components/molecules/EmptyState/Events/active-inactive';
import ArchiveModal from 'components/molecules/EventsModals/ArchiveModal/Modal';
import CloneEventModal from 'components/molecules/EventsModals/CloneModal/Modal';
import DeleteEventModal from 'components/molecules/EventsModals/DeleteModal/Modal';
import { DPIconEventActive } from 'icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActionWrapper,
  ActiveInactiveWrapper,
  Container,
  DateWrapper,
  SwitchIconWrapper,
  ViewWrapper
} from './styles';

function ActiveInactive() {
  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);

  const navigate = useNavigate();

  const onRowClicked = (row) => {
    navigate('events-details', { state: row });
  };

  const openCloneModal = (e) => {
    e.stopPropagation();
    setCloneEventOpen(true);
  };

  const openDeleteModal = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const openArchive = (e) => {
    e.stopPropagation();
    setOpenArchiveModal(true);
  };

  const columns = [
    {
      name: '',
      selector: (row) => row.name,
      width: '30rem'
    },

    {
      name: '',
      cell: () => (
        <SwitchIconWrapper>
          <Switch />
          <DPIconEventActive />
        </SwitchIconWrapper>
      )
    },

    {
      name: '',
      cell: () => (
        <DateWrapper>
          <p className="title">Begins</p>
          <h2 className="date">09/15/2021</h2>
        </DateWrapper>
      ),
      width: '23rem'
    },

    {
      name: '',
      cell: () => (
        <ViewWrapper>
          <p className="title">Attendees</p>
          <h2 className="view">1(View all)</h2>
        </ViewWrapper>
      ),
      width: '20rem'
    },
    {
      name: '',
      cell: () => (
        <ActionWrapper>
          <p className="action">Edit</p>
          <p className="action" onClick={openCloneModal}>
            Clone
          </p>
          <p className="action" onClick={openArchive}>
            Archive
          </p>
          <p className="delete" onClick={openDeleteModal}>
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
      beggin: '',
      attendee: '',
      action: ''
    },
    {
      name: 'A day with the elderly',
      switch: '',
      beggin: '',
      attendee: '',
      action: ''
    },
    {
      name: 'A day with the orphans copy',
      switch: '',
      beggin: '',
      attendee: '',
      action: ''
    }
  ];

  return (
    <ActiveInactiveWrapper>
      <Container>
        <CloneEventModal isShown={openCloneEvent} onClose={() => setCloneEventOpen(false)} />
        <DeleteEventModal isShown={open} onClose={() => setOpen(false)} />
        <ArchiveModal isShown={openArchiveModal} onClose={() => setOpenArchiveModal(false)} />

        {!!data?.length ? (
          <Table
            className="events-table"
            columns={columns}
            onRowClicked={onRowClicked}
            data={data}
          />
        ) : (
          <ActiveInactiveEmptyState />
        )}
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
