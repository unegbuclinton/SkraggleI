import React, { useState } from "react";
import Switch from "components/atoms/Switch/Switch";
import {
  ActionWrapper,
  ActiveInactiveWrapper,
  SwitchIconWrapper,
  ContentsWrapper,
  DateWrapper,
  ViewWrapper,
  Container,
} from "./styles";
import { DPIconEventActive } from "icons";
import CloneEventModal from "components/molecules/EventsModals/CloneModal/Modal";
import DeleteEventModal from "components/molecules/EventsModals/DeleteModal/Modal";
import ArchiveModal from "components/molecules/EventsModals/ArchiveModal/Modal";
import { useNavigate } from "react-router-dom";
import Table from "components/layouts/Table";

function ActiveInactive() {
  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);

  const navigate = useNavigate();

  const onRowClicked = (row) => {
    let path = "events-details";
    navigate(path, { state: row });
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
      name: "",

      cell: () => (
        <ContentsWrapper>
          <h2 className="heading"> A day with the orphans</h2>
        </ContentsWrapper>
      ),
      width: "30rem",
    },

    {
      name: "",

      cell: () => (
        <SwitchIconWrapper>
          <Switch />
          <DPIconEventActive />
        </SwitchIconWrapper>
      ),
      // width: "40rem",
    },

    {
      name: "",

      cell: () => (
        <DateWrapper>
          <p className="title">Beggins</p>
          <h2 className="date">09/15/2021</h2>
        </DateWrapper>
      ),
      width: "25rem",
    },

    {
      name: "",

      cell: () => (
        <ViewWrapper>
          <p className="title">Attendees</p>
          <h2 className="view">1(View all)</h2>
        </ViewWrapper>
      ),
      //   width: "57rem",
    },
    {
      name: "",

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
      width: "30rem",
    },
  ];

  const data = [
    {
      heading: "",
      switch: "",
      beggin: "",
      attendee: "",
      action: "",
    },
    {
      heading: "",
      switch: "",
      beggin: "",
      attendee: "",
      action: "",
    },
    {
      heading: "",
      switch: "",
      beggin: "",
      attendee: "",
      action: "",
    },
  ];

  return (
    <ActiveInactiveWrapper>
      <Container>
        <CloneEventModal
          isShown={openCloneEvent}
          onClose={() => setCloneEventOpen(false)}
        />
        <DeleteEventModal isShown={open} onClose={() => setOpen(false)} />
        <ArchiveModal
          isShown={openArchiveModal}
          onClose={() => setOpenArchiveModal(false)}
        />

        <Table columns={columns} onRowClicked={onRowClicked} data={data} />
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
