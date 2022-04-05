import Modal from 'components/layouts/Modal';
import React from 'react';
import MultiStepForm from '../MultiStepModal';

function CreateP2PModal({ onClose, isShown }) {
  return (
    <Modal
      header="Create P2P Fundraiser"
      onClose={onClose}
      isShown={isShown}
      hide={onClose}
    >
      <MultiStepForm onClose={onClose} />
    </Modal>
  );
}

export default CreateP2PModal;
