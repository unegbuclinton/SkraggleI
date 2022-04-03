import React, { useState } from "react";
import DashboardLayout from "components/layouts/DashboardLayout";
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  PackageWrapper,
  PriceWrapper,
  SwitchIconWrapper,
  ViewWrapper,
} from "./styles";
import Switch from "components/atoms/Switch/Switch";
import PackageDropdown from "../DropdownComponents/PackagesDropdown";

function Packages() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <DashboardLayout>
      <PackageWrapper>
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
          <ContentContainer onClick={() => setDropdown(true)}>
            <ContentsWrapper>
              <h2 className="heading">Gift pack</h2>
              <p className="heading-text">5 participants per package</p>
            </ContentsWrapper>
            <SwitchIconWrapper>
              <Switch />
            </SwitchIconWrapper>
            <PriceWrapper>
              <p className="title">Price</p>
              <h2 className="price">$20.00</h2>
            </PriceWrapper>
            <ViewWrapper>
              <p className="title">Direct cost</p>
              <h2 className="view">$4.00</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">Packages</p>
              <h2 className="view">(0 sold)</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">Private</p>
              <h2 className="view">No</h2>
            </ViewWrapper>
            <ActionWrapper>
              <p className="action">Edit</p>
              <p className="action">
                {/* onClick={() => setCloneEventOpen(true)} */}
                Clone
              </p>

              <p className="delete">
                {/* onClick={() => setOpen(true)} */}
                Delete
              </p>
            </ActionWrapper>
          </ContentContainer>
          {dropdown && <PackageDropdown setDropdown={setDropdown} />}
          <ContentContainer>
            <ContentsWrapper>
              <h2 className="heading">Gift pack</h2>
              <p className="heading-text">5 participants per package</p>
            </ContentsWrapper>
            <SwitchIconWrapper>
              <Switch />
            </SwitchIconWrapper>
            <PriceWrapper>
              <p className="title">Price</p>
              <h2 className="price">$20.00</h2>
            </PriceWrapper>
            <ViewWrapper>
              <p className="title">Direct cost</p>
              <h2 className="view">$4.00</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">Packages</p>
              <h2 className="view">(0 sold)</h2>
            </ViewWrapper>
            <ViewWrapper>
              <p className="title">Private</p>
              <h2 className="view">No</h2>
            </ViewWrapper>
            <ActionWrapper>
              <p className="action">Edit</p>
              <p className="action">
                {/* onClick={() => setCloneEventOpen(true)} */}
                Clone
              </p>

              <p className="delete">
                {/* onClick={() => setOpen(true)} */}
                Delete
              </p>
            </ActionWrapper>
          </ContentContainer>
        </Container>
      </PackageWrapper>
    </DashboardLayout>
  );
}

export default Packages;
