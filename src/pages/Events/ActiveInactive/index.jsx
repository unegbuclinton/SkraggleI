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
        <ContentContainer>
          <ContentsWrapper onClick={rowClick}>
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
            <p className="action" onClick={() => setCloneEventOpen(true)}>
              Clone
            </p>
            <p className="action" onClick={() => setOpenArchiveModal(true)}>
              Archive
            </p>
            <p className="delete" onClick={() => setOpen(true)}>
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
            <p className="action" onClick={() => setCloneEventOpen(true)}>
              Clone
            </p>
            <p className="action" onClick={() => setOpenArchiveModal(true)}>
              Archive
            </p>
            <p className="delete" onClick={() => setOpen(true)}>
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
            <p className="action" onClick={() => setCloneEventOpen(true)}>
              Clone
            </p>
            <p className="action" onClick={() => setOpenArchiveModal(true)}>
              Archive
            </p>
            <p className="delete" onClick={() => setOpen(true)}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
      </Container>
    </ActiveInactiveWrapper>
  );
}

export default ActiveInactive;
