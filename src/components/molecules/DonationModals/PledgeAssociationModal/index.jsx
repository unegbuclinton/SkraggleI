import Modal from 'components/layouts/Modal';
import React from 'react';
import PledgeAssociateModalComponent from '../PledgeAssociationModalComponent';

function PledgeAssociationModal({ onClose, isShown}) {
  return (
    <Modal header="Pledge" isShown={isShown} hide={onClose}>
        <PledgeAssociateModalComponent onClose={onClose} />
    </Modal>
  );
}

export default PledgeAssociationModal;
