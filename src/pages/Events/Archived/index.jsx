/* eslint-disable no-extra-boolean-cast */
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import ArchivedEmptyState from 'components/molecules/EmptyState/Events/Archived';
import CloneEventModal from 'components/molecules/EventsModals/CloneModal/Modal';
import DeleteEventModal from 'components/molecules/EventsModals/DeleteModal/Modal';
import { TableHeader } from 'components/molecules/Reports/ReportsExportHistory';
import { cloneEvent, delEvent, getAllEvents, getEachEvent } from 'features/events/eventSlice';
import { DPIconEventActive } from 'icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utilities/helpers';
import { ActionText, ArchivedWrapper } from './styles.';

function Archived() {
  const [getRowId, setGetRowId] = useState('');

  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { archivedEvents } = useSelector((state) => state.events);

  console.log(archivedEvents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      cell: (row) => (
        <ActionText red onClick={() => openDelete(row.id)}>
          Delete
        </ActionText>
      )
    }
  ];

  return (
    <ArchivedWrapper>
      {!!archivedEvents.length ? (
        <>
          <Table
            className="events-table"
            columns={columns}
            onRowClicked={onRowClicked}
            data={archivedEvents}
            selectableRows
            selectableRowsComponent={Checkbox}
          />

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
          <TableHeader
            header={`${archivedEvents.length} Events`}
            title="Create New"
            eventHeader
            setOpenDeleteModal={setOpenDeleteModal}
          />
        </>
      ) : (
        <ArchivedEmptyState />
      )}
    </ArchivedWrapper>
  );
}

export default Archived;
