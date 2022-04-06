import React, { useState } from "react";
import Switch from "components/atoms/Switch/Switch";
import {
  ActionWrapper,
  ActiveInactiveWrapper,
  ContentContainer,
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

function ActiveInactive() {
  const [openCloneEvent, setCloneEventOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);

  const navigate = useNavigate();

  const rowClick = () => {
    let path = "events-details";
    navigate(path);
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
        <ContentContainer onClick={rowClick}>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
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
        </ContentContainer>
        <ContentContainer>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
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
        </ContentContainer>
        <ContentContainer>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
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
        </ContentContainer>
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
