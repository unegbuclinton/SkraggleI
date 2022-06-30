import Button from 'components/atoms/Button/Button';
import EditAssociationModal from 'components/molecules/Contacts/SubModals/EditAssociationInfoModal/MainModal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AssociationContainer, AssociationHeading, AssociationWrapper } from './styles';

function Association() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { eachContact } = useSelector((state) => state.contact);

  const company = eachContact?.company;
  const houseHoldData = eachContact?.households;

  const houseHold = houseHoldData?.map((curr) => curr.name);
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
        <p className="info name">{company?.name}</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD</h2>
        <p className="info household">{houseHold}</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">HOUSEHOLD ROLE</h2>
        <p className="info role">-</p>
      </AssociationContainer>
    </AssociationWrapper>
  );
}

export default Association;
