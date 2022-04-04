import React, { useState } from "react";
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
import DeletePackageModal from "components/molecules/EventsModals/PackageModal/DeleteModal/Modal";
import ClonePackageModal from "components/molecules/EventsModals/PackageModal/CloneModal/Modal";

function Packages() {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);
  return (
    <PackageWrapper>
      <Container>
        <ClonePackageModal
          isShown={openCloneModal}
          onClose={() => setOpenCloneModal(false)}
        />
        <DeletePackageModal isShown={open} onClose={() => setOpen(false)} />

        <ContentContainer>
          <ContentsWrapper onClick={() => setDropdown(true)}>
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
            <p className="action" onClick={() => setOpenCloneModal(true)}>
              Clone
            </p>

            <p className="delete" onClick={() => setOpen(true)}>
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
            <p className="action" onClick={() => setOpenCloneModal(true)}>
              Clone
            </p>

            <p className="delete" onClick={() => setOpen(true)}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
      </Container>
    </PackageWrapper>
  );
}

export default Packages;
