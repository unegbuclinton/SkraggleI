import React from "react";
import Switch from "components/atoms/Switch/Switch";
import DashboardLayout from "components/layouts/DashboardLayout";
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  FieldWrapper,
  RequiredWrapper,
  SwitchIconWrapper,
  ViewWrapper,
} from "./styles";

function Fields() {
  return (
    <DashboardLayout>
      <FieldWrapper>
        <Container>
          {/* <CloneEventModal
          isShown={openCloneEvent}
          onClose={() => setCloneEventOpen(false)}
        />
        <DeleteEventModal isShown={open} onClose={() => setOpen(false)} />
        <ArchiveModal
          isShown={openArchiveModal}
          onClose={() => setOpenArchiveModal(false)}
        /> */}
          <ContentContainer>
            <ContentsWrapper>
              <h2 className="heading">Trial label</h2>
              <p className="heading-text">DisplayLabel</p>
            </ContentsWrapper>
            <SwitchIconWrapper>
              <Switch />
            </SwitchIconWrapper>
            <RequiredWrapper>
              <p className="title">Required</p>
              <h2 className="price">No</h2>
            </RequiredWrapper>
            <ViewWrapper>
              <p className="title">Own line</p>
              <h2 className="view">Yes</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">Type</p>
              <h2 className="view">Text box</h2>
            </ViewWrapper>

            <ActionWrapper>
              <p className="action">Edit</p>
              <p className="delete">
                {/* onClick={() => setOpen(true)} */}
                Delete
              </p>
            </ActionWrapper>
          </ContentContainer>
        </Container>
      </FieldWrapper>
    </DashboardLayout>
  );
}

export default Fields;
