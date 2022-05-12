import Switch from 'components/atoms/Switch/Switch';
import DeletePromoCodeModal from 'components/molecules/EventsModals/PromocodeModal/DeleteModal/Modal';
import React, { useState } from 'react';
import PromoCodeDropdown from '../DropdownComponents/PromoCodeDropdown';
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  PromoCodeWrapper,
  RequiredWrapper,
  SwitchIconWrapper,
  ViewWrapper
} from './styles';

function PromoCodes() {
  const [dropdown, setDropdown] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const OpenDeleteModal = (e) => {
    e.stopPropagation();
    setOpenDelete(true);
  };
  return (
    <PromoCodeWrapper>
      <Container>
        <DeletePromoCodeModal isShown={openDelete} onClose={() => setOpenDelete(false)} />

        <ContentContainer onClick={() => setDropdown(true)}>
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
            <p className="delete" onClick={OpenDeleteModal}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
        {dropdown && <PromoCodeDropdown setDropdown={setDropdown} />}
      </Container>
    </PromoCodeWrapper>
  );
}

export default PromoCodes;
