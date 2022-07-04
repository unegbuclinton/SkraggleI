import Checkbox from 'components/atoms/CheckBox';
import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
// import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import ArchiveModal from 'components/molecules/EventsModals/ArchiveModal/Modal';
import CloneEventModal from 'components/molecules/EventsModals/CloneModal/Modal';
import CreateEventModal from 'components/molecules/EventsModals/CreateEventModal/Modal';
import DeleteEventModal from 'components/molecules/EventsModals/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import {
  cloneEvent,
  delEvent,
  getAllEvents,
  getAllFields,
  getAllPackages,
  getAllPromoCode,
  getEachEvent
} from 'features/events/eventSlice';
import { DPIconEventActive } from 'icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utilities/helpers';
import { ActionText, ActiveInactiveWrapper, Container } from './styles';

function ActiveInactive() {
  const [getRowId, setGetRowId] = useState('');

  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const [open, setOpen] = useState(false);

  const { allEvents } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPackages());
    dispatch(getAllFields());
    dispatch(getAllPromoCode());
  }, []);

  const onRowClicked = (row) => {
    dispatch(getEachEvent(row.id));
    navigate('events-details', { state: row });
  };

  const openCloneModal = (id) => {
    setCloneEventOpen(true);
    setGetRowId(id);
  };

  const openDelete = (id) => {
    setOpenDeleteModal(true);
    setGetRowId(id);
  };

  const openArchive = (id) => {
    setOpenArchiveModal(true);
    setGetRowId(id);
  };

  const deleteEvent = (id) => {
    const body = {
      ids: [id]
    };
    dispatch(delEvent(body)).then(() => {
      setOpenDeleteModal(false);
      dispatch(getAllEvents());
    });
  };

  const makeClone = (id) => {
    const body = {
      events: [id]
    };
    dispatch(cloneEvent(body)).then(() => {
      setCloneEventOpen(false);
      dispatch(getAllEvents());
    });
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
      width: '15rem'
    },
    {
      cell: () => <ActionText>Edit</ActionText>,
      width: '8rem'
    },
    {
      cell: (row) => <ActionText onClick={() => openCloneModal(row.id)}>Clone</ActionText>,
      width: '8rem'
    },
    {
      cell: (row) => <ActionText onClick={() => openArchive(row.id)}>Archive</ActionText>,
      width: '8rem'
    },
    {
      cell: (row) => (
        <ActionText red onClick={() => openDelete(row.id)}>
          Delete
        </ActionText>
      )
    }
  ];

  return (
    <ActiveInactiveWrapper>
      <Container>
        <CreateEventModal isShown={open} onClose={() => setOpen(false)} />
        <CloneEventModal
          onClick={() => makeClone(getRowId)}
          isShown={openCloneEvent}
          onClose={() => setCloneEventOpen(false)}
        />

        <DeleteEventModal
          isShown={openDeleteModal}
          onClick={() => deleteEvent(getRowId)}
          onClose={() => setOpenDeleteModal(false)}
        />
        <ArchiveModal isShown={openArchiveModal} onClose={() => setOpenArchiveModal(false)} />
        <TableHeader
          header={`${allEvents.length} Events`}
          title="Create New"
          eventHeader
          setOpenDeleteModal={setOpenDeleteModal}
          setOpen={setOpen}
        />
        <Table
          className="events-table"
          columns={columns}
          onRowClicked={onRowClicked}
          data={allEvents}
          selectableRows
          selectableRowsComponent={Checkbox}
        />
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
