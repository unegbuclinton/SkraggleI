import Switch from 'components/atoms/Switch/Switch';
import DeleteFieldModal from 'components/molecules/EventsModals/FieldsModal/DeleteModal/Modal';
import React, { useState } from 'react';
// import FieldDropdown from '../DropdownComponents/FieldsDropdown';
import CreateNewFieldModals from '../EventModals/CreateNewFieldModals';
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
        {dropdown && <CreateNewFieldModals isShown={dropdown} onClose={() => setDropdown(false)} />}
      </Container>
    </FieldWrapper>
  );
}

export default Fields;
