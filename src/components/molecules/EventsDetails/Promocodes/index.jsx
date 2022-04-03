import Switch from "components/atoms/Switch/Switch";
import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  PromoCodeWrapper,
  RequiredWrapper,
  SwitchIconWrapper,
  ViewWrapper,
} from "./styles";

function PromoCodes() {
  return (
    <DashboardLayout>
      <PromoCodeWrapper>
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
              <h2 className="heading">Save15</h2>
              <p className="heading-text">test</p>
            </ContentsWrapper>
            <SwitchIconWrapper>
              <Switch />
            </SwitchIconWrapper>
            <RequiredWrapper>
              <p className="title">Discount</p>
              <h2 className="discount">15%</h2>
            </RequiredWrapper>
            <ViewWrapper>
              <p className="title">Maximum uses</p>
              <h2 className="view">1</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">times used</p>
              <h2 className="view">0</h2>
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
      </PromoCodeWrapper>
    </DashboardLayout>
  );
}

export default PromoCodes;
