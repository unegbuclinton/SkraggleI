import Switch from 'components/atoms/Switch/Switch';
import EventPackageModal from 'components/molecules/EventsModals/EventPackageModal';
import ClonePackageModal from 'components/molecules/EventsModals/PackageModal/CloneModal/Modal';
import DeletePackageModal from 'components/molecules/EventsModals/PackageModal/DeleteModal/Modal';
import React, { useState } from 'react';
// import PackageDropdown from '../DropdownComponents/PackagesDropdown';
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  PackageWrapper,
  PriceWrapper,
  SwitchIconWrapper,
  ViewWrapper
} from './styles';

function Packages() {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onpenDelete = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const openClone = (e) => {
    e.stopPropagation();
    setOpenCloneModal(true);
  };

  return (
    <PackageWrapper>
      <Container>
        <ClonePackageModal isShown={openCloneModal} onClose={() => setOpenCloneModal(false)} />
        <DeletePackageModal isShown={open} onClose={() => setOpen(false)} />

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
            <p className="action" onClick={onpenDelete}>
              Clone
            </p>

            <p className="delete" onClick={openClone}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
        {dropdown && <EventPackageModal isShown={dropdown} onClose={() => setDropdown(false)} />}
        <ContentContainer onClick={() => setOpenDropdown(true)}>
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
            <p className="action" onClick={onpenDelete}>
              Clone
            </p>

            <p className="delete" onClick={openClone}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
        {openDropdown && (
          <EventPackageModal isShown={openDropdown} onClose={() => setOpenDropdown(false)} />
        )}
      </Container>
    </PackageWrapper>
  );
}

export default Packages;
