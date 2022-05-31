import Button from 'components/atoms/Button/Button';
import EditAssociationModal from 'components/molecules/Contacts/SubModals/EditAssociationInfoModal/MainModal';
import React, { useState } from 'react';
import { AssociationContainer, AssociationHeading, AssociationWrapper } from './styles';

function Association() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <AssociationWrapper>
      <AssociationHeading>
        <h1 className="heading">Association</h1>
        <Button className="heading-btn" onClick={() => setModalIsOpen(true)}>
          Edit
        </Button>
        {modalIsOpen && (
          <EditAssociationModal
            isShown={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
          />
        )}
      </AssociationHeading>
      <AssociationContainer>
        <h2 className="title">COMPANIES</h2>
        <p className="info name">Hanna Dandanell</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD</h2>
        <p className="info household">-</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD ROLE</h2>
        <p className="info role">-</p>
      </AssociationContainer>
    </AssociationWrapper>
  );
}

export default Association;
