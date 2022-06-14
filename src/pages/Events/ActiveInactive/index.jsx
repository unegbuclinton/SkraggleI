import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import ArchiveModal from 'components/molecules/EventsModals/ArchiveModal/Modal';
import CloneEventModal from 'components/molecules/EventsModals/CloneModal/Modal';
import CreateEventModal from 'components/molecules/EventsModals/CreateEventModal/Modal';
import DeleteEventModal from 'components/molecules/EventsModals/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getAllPackages, getEachEvent } from 'features/events/eventSlice';
import { DPIconEventActive } from 'icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utilities/helpers';
import { ActionWrapper, ActiveInactiveWrapper, Container } from './styles';

function ActiveInactive() {
  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const [open, setOpen] = useState(false);

  const { allEvents } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPackages());
  }, []);
  const onRowClicked = (row) => {
    dispatch(getEachEvent(row.id));
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
      name: 'BEGINS',
      selector: (row) => formatDate(row.created_at),
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

  return (
    <ActiveInactiveWrapper>
      <Container>
        <CreateEventModal isShown={open} onClose={() => setOpen(false)} />
        <CloneEventModal isShown={openCloneEvent} onClose={() => setCloneEventOpen(false)} />
        <DeleteEventModal isShown={openDeleteModal} onClose={() => setOpenDeleteModal(false)} />
        <ArchiveModal isShown={openArchiveModal} onClose={() => setOpenArchiveModal(false)} />
        <TableHeader
          header={`${allEvents.length} Events`}
          title="Create New"
          eventHeader
          setOpen={setOpen}
        />
        <Table
          className="events-table"
          columns={columns}
          onRowClicked={onRowClicked}
          data={allEvents}
        />
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
