import React, { useState } from 'react';
import Switch from 'components/atoms/Switch/Switch';
import {
  ActionWrapper,
  Container,
  ContentContainer,
  ContentsWrapper,
  FieldWrapper,
  RequiredWrapper,
  SwitchIconWrapper,
  ViewWrapper
} from './styles';
import FieldDropdown from '../DropdownComponents/FieldsDropdown';
import DeleteFieldModal from 'components/molecules/EventsModals/FieldsModal/DeleteModal/Modal';

function Fields() {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const openDelete = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <FieldWrapper>
      <Container>
        <DeleteFieldModal isShown={open} onClose={() => setOpen(false)} />

        <ContentContainer onClick={() => setDropdown(true)}>
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
            <p className="delete" onClick={openDelete}>
              Delete
            </p>
          </ActionWrapper>
        </ContentContainer>
        {dropdown && <FieldDropdown setDropdown={setDropdown} />}
      </Container>
    </FieldWrapper>
  );
}

export default Fields;
