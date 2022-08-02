import Modal from 'components/layouts/Modal';
import React from 'react';
import ImpactAreaModalComponent from '../ModalComponents/ImpactAreaModalComponent';

function ImpactAreaModal({ isShown, onClose }) {
  return (
    <Modal header="Create Impact Area" isShown={isShown} hide={onClose}>
      <ImpactAreaModalComponent />
    </Modal>
  );
}

export default ImpactAreaModal;
